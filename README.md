# Parkhang 

An application that allow users to participate in creating critical editions of texts, initially targeting the Tibetan language.

## Dependencies

There are two parts, the server-side API and the frontend.

#### Web server and API

The server-side is implemented with [Django](https://www.djangoproject.com/), targeting python >= 3.6. The database is expected to be PostgreSQL although SQLite is currently used for development.

* [django-rest-framework](http://www.django-rest-framework.org/) is used for the API.

* [django-allauth](http://www.intenct.nl/projects/django-allauth/) is used for user management.


An ansible playbook is provided to setup a VM or server. Otherwise, it can be installed inside a virtualenv on the developers machine using pip.

    pip install -r requirements/dev.txt
    
The database can be setup using the standard Django migrate command

    ./manage migrate
    
Once installed, it can be tested using the django's builtin http server:

    ./manage runserver
    
On the server, it is recommended to use nginx and uwsgi to serve the app. The `ansible/appservers.yml` playbook shows an example of how to set this up.

#### Frontend

The UI is implemented using a React/Redux stack:

* [React](https://facebook.github.io/react/)

    For the view layer.

* [Redux](http://redux.js.org/)

    For managing data and state.

* [Redux-Saga](https://github.com/redux-saga/redux-saga)

    For managing side-effects e.g. API calls over the Network.

Also, CSS is managed using:

* [cssnext](http://cssnext.io/)

    Enables the use of modern css features that are not yet available in all browsers.

* [CSS Modules](https://github.com/css-modules/css-modules)

    Enables css to be scoped locally to a module e.g. a react component.

The following tooling is required for development:

* [node and npm](https://nodejs.org/en/)

    For installing and managing third-party packages.

* [webpack](https://webpack.js.org/)

    For building/packaging the code for release.
    
* [Jest](https://facebook.github.io/jest/)

    Used for testing
    
##### Installing

Ensure node.js and npm is installed and up-to-date. Then `package.json` can be installed and everything should be setup as required.

    cd path/to/parkhang/parkhang/frontend
    npm install
    
Webpack can then be started in watch mode:

    ./node_modules/.bin/webpack --config webpack.dev.config.js --progress --watch
    
##### Testing

Testing is provided using jest, and the test suite can be initiated using npm:

    npm test
    
## Data model

The following components make up the data:

* Texts

    The texts we are creating critical editions of. Basically consists of metadata, such as the name of the text.

* Base Witness

    This is a version of the text referred to by other versions. It is the only version that actually contains content. These can only be created when at least 90% of the content is available. Once created, this content cannot be changed - any changes, such as spelling corrections, will be applied via Annotations (see below).

* Witnesses

    Versions of a text, such as those part of a regional collection like Derge or Narthang. They are used only to store metadata, such as the collection it belongs to, and as a reference when creating annotations.

* Annotations

    Required changes are packaged in Annotations. These point to a specific location in the base witness, and the length of affected text. They also contain the content that should replace the current content at that location. This is very similar to a [web annotation](https://www.w3.org/TR/annotation-model/#annotations), and could be either converted seamlessly to RDF by an API, or exported. 
    
    These annotations **always** point to a position in the base witness, no matter how many annotations have been applied. This means annotations can keep the same positioning data so long as the base text is not changed. The structure of the content is generated automatically in code to display to the user and/or export to a file.
    
    Annotations that change the text are called *Variants*.
    
    There is also the possibility for non-mutating annotations, such as locations of page breaks, or notes, but they have not yet been implemented in the UI.
    
Differences between the versions are highlighted and a user can select which one they think is correct. A user's selections are associated only with that user, enabling multiple users to work on the same text concurrently.

    
#### Differences between witnesses

To calculate the differences between the different editions of the text, the `dwdiff` command is used. This generates diff files which are parsed and converted into Annotations and saved in the database. 

The particular command is:

    dwdiff --start-delete="|-" --stop-delete="-/" --aggregate-changes -d "ཿ།།༌་ \n" "{base_witness_path}" "{other_witness_path}"
    
We use the `|` and `/` characters to denote changes as the default `{}` characters are sometimes used within the texts. 

There is a Django management command that performs this:
[`parkhang/texts/management/commands/import_texts.py`](parkhang/texts/management/commands/import_texts.py)
        
## Code Structure

#### Django

The database structure is modeled in the `texts` app, in [`models.py`](parkhang/texts.models.py)

The API is setup in the `api` app.

`django-webpack-loader` allows the current webpack bundle to linked to on the generated home page.

#### Javascript

* The `app` directory contains most of the development code. 

* `app/lib` contains non-UI related code.

* `static` contains generated webpack bundles.

* `website` contains files that are used by the Django-generated pages, such as login and signup.

###### Redux

The redux files are s
