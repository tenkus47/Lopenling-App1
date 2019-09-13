import tempfile
from shlex import quote
from fabric import Connection, task

@task
def setup_app(connection, app_name, secret_key, email_host, email_user, email_password):
    # Create the app
    try:
        connection.run(f'dokku apps:create {app_name}')
    except:
        pass

    # Create directory for app in the default dokku storage location
    connection.run(f'mkdir -p /var/lib/dokku/data/storage/{app_name}')

    # Ensure the proper user has access to this directory
    connection.run(f'chown -R 32767:32767 /var/lib/dokku/data/storage/{app_name}')

    # Create extra directories as required.
    connection.run(f'mkdir -p /var/lib/dokku/data/storage/{app_name}/data')
    connection.run(f'mkdir -p /var/lib/dokku/data/storage/{app_name}/media')
    connection.run(f'mkdir -p /var/lib/dokku/data/storage/{app_name}/static_collected')

    # Copy custom nginx config
    try:
        copy_custom_nginx_config(connection, app_name)
    except:
        print("Failed to copy custom nginx config")

    # Mount in dokku
    try:
        connection.run(f'dokku storage:mount {app_name} /var/lib/dokku/data/storage/{app_name}:/app/storage')
    except:
        pass

    # Create database in shared postgres container
    try:
        connection.run(f'dokku psql:create {app_name}')
    except:
        pass

    # Setup env vars
    set_config(connection, app_name, 'DJANGO_SETTINGS_MODULE', 'project.settings.dokku', True)
    set_config(connection, app_name, 'EMAIL_HOST', email_host, True)
    set_config(connection, app_name, 'EMAIL_HOST_USER', email_user, True)
    set_config(connection, app_name, 'EMAIL_HOST_PASSWORD', email_password, True)
    set_config(connection, app_name, 'SECRET_KEY', secret_key)

@task
def get_config(connection, app_name, config):
    result = connection.run(f'dokku config:get {app_name} {config}')
    try:
        config = result.stdout.strip()
    except:
        config = ''
    if len(config) == 0:
        config = None
    return config

@task
def set_config(connection, app_name, config, value, no_restart=False):
    restart_string = ''
    if no_restart:
        restart_string = '--no-restart'
    value = quote(value)
    connection.run(f'dokku config:set {restart_string} {app_name} {config}={value}')

def clear_config(connection, app_name, config):
    connection.run(f'dokku config:unset --no-restart {app_name} {config}')

@task
def add_domain(connection, app_name, domain):
    try:
        allowed_hosts = get_config(connection, app_name, 'ALLOWED_HOST')
    except:
        allowed_hosts = None

    if allowed_hosts:
        allowed_hosts = allowed_hosts.split(',')
    else:
        allowed_hosts = []

    if domain not in allowed_hosts:
        allowed_hosts.append(domain)
    allowed_hosts = ','.join(allowed_hosts)
    connection.run(f'dokku config:set --no-restart {app_name} ALLOWED_HOST={allowed_hosts}')
    connection.run(f'dokku domains:add {app_name} {domain}')

@task
def remove_domain(connection, app_name, domain):
    allowed_hosts = get_config(connection, app_name, 'ALLOWED_HOST')
    if allowed_hosts and domain in allowed_hosts:
        allowed_hosts = allowed_hosts.split(',')
        allowed_hosts.remove(domain)
        if len(allowed_hosts) > 0:
            allowed_hosts = ','.join(allowed_hosts)
        else:
            allowed_hosts = None

    if not allowed_hosts:
        clear_config(connection, app_name, 'ALLOWED_HOST')
    else:
        connection.run(f'dokku config:set --no-restart {app_name} ALLOWED_HOST={allowed_hosts}')

    connection.run(f'dokku domains:remove {app_name} {domain}')

@task
def copy_custom_nginx_config(connection, app_name):
    with open('nginx.conf.d/app.conf', 'r') as nginx_config:
        app_config = nginx_config.read()
    target_dir = f'/home/dokku/{app_name}/nginx.conf.d'
    connection.run(f'mkdir -p {target_dir}')
    app_config = app_config.replace('{APP_NAME}', app_name)
    with tempfile.NamedTemporaryFile(mode='w+t') as tmpfile:
        tmpfile.writelines(app_config)
        tmpfile.seek(0)
        connection.put(tmpfile.name, remote=f'{target_dir}/app.conf')

@task
def setup_letsencrypt(connection, app_name, email):
    try:
        connection.run(f'dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git')
    except:
        pass

    connection.run(f'dokku config:set --no-restart {app_name} DOKKU_LETSENCRYPT_EMAIL={email}')
    connection.run(f'dokku letsencrypt {app_name}')

@task
def redeploy_app(connection, app_name):
    connection.run(f'dokku ps:rebuild {app_name}')

@task
def import_text_data(connection, app_name, user, host):
    connection.local(f'rsync --partial -a ../data/texts/ {user}@{host}:/var/lib/dokku/data/storage/{app_name}/data/texts')
    connection.run(f'dokku run {app_name} parkhang/manage.py import_texts "/app/storage/data/texts" སྡེ་དགེ --settings=project.settings.dev')
    
    # TODO?: Delete current text database data?    

@task 
def import_image_data(connection, app_name, csv_file, name_column, start_image_column, source_name):
    connection.run(f'mkdir -p /var/lib/dokku/data/storage/{app_name}/data/image-data/')
    connection.put(csv_file, remote=f'/var/lib/dokku/data/storage/{app_name}/data/image-data/{source_name}_images_data.csv')
    connection.run(f'dokku run {app_name} parkhang/manage.py import_bdrc_image_data "/app/storage/data/image-data/{source_name}_images_data.csv" {name_column} {start_image_column} {source_name}')