run:
	docker-compose -f local.yml up

build:
	docker-compose -f local.yml build

stop:
	docker-compose -f local.yml down

deploy:
	docker-compose -f production.yml up --build -d

prod-stop:
	docker-compose -f production.yml down

migrate:
	docker-compose -f local.yml run --rm django python manage.py makemigrations
	docker-compose -f local.yml run --rm django python manage.py migrate

prod-migrate:
	docker-compose -f production.yml run --rm django python manage.py makemigrations
	docker-compose -f production.yml run --rm django python manage.py migrate

createsuperuser:
	docker-compose -f local.yml run --rm django python manage.py createsuperuser

prod-createsuperuser:
	docker-compose -f production.yml run --rm django python manage.py createsuperuser

manage:
	docker-compose -f local.yml run --rm django python manage.py $(arg)

prod-manage:
	docker-compose -f production.yml run --rm django python manage.py $(arg)

test:
	docker-compose -f local.yml run django pytest

shell:
	docker-compose -f local.yml exec django sh

django-shell:
	docker-compose -f local.yml run --rm django python manage.py shell

prod-django-shell:
	docker-compose -f production.yml run --rm django python manage.py shell

graph-models:
	docker-compose -f local.yml exec django python manage.py graph_models texts users -g -o /home/django/models.png
	docker cp "$(docker-compose -f local.yml ps -q django)":/home/django/models.png ./parkhang/static/