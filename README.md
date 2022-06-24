<h1 align="center">
  <br>
  <a href="https://parkhang.lopenling.org" target="blank_"><img src="https://github.com/OpenPecha/Lopenling-App/raw/master/parkhang/frontend/app/images/lopenling_logo.png" alt="Lopenling App Logo" width="500"></a>
  <br>
</h1>

<h3 align="center">Lopenling App</h3>


<!-- Replace the title of the repository -->

<p align="center">
  <a href="#description">Description</a> •
  <a href="#owner">Owner</a> •
  <a href="#integrations">Integrations</a> •
  <a href="#docs">Docs</a>
</p>
<hr>

## Description

An application that allow users to participate in creating critical editions of texts, initially targeting the Tibetan language.
<!-- This section provides a high-level overview for the repo -->

## Owner

- [@sherab](https://github.com/sherab), Fullstack
- [@10zinten](https://github.com/10zinten), Backend
- [@tenkus47](https://github.com/tenkus47), Frontend


<!-- This section lists the owners of the repo -->

## Integrations

- No integrations with other repos.

<!-- This section must list as bulleted list how this repo depends or is integrated with other repos -->

## Docs


## Dependencies

There are two parts, the server-side API and the frontend.

#### Web server and API

The server-side is implemented with [Django](https://www.djangoproject.com/), targeting python >= 3.6. The database is expected to be PostgreSQL although SQLite is currently used for development.

* [django-rest-framework](http://www.django-rest-framework.org/) is used for the API.

User accounts are connected to a running Discourse instance. Setup is explained below.

An ansible playbook is provided to setup a VM or server. Otherwise, it can be installed inside a virtualenv on the developers machine using pip.

    pip install -r requirements/dev.txt

The database can be setup using the standard Django migrate command

    ./manage migrate

Once installed, it can be tested using the django's builtin http server:

    ./manage runserver

On the server, it is recommended to use nginx and uwsgi to serve the app. The `ansible/appservers.yml` playbook shows an example of how to set this up.

## Development with Docker

Build the stack
```bash
$ docker-compose -f local.yml build
```

Run the stack
```bash
$ docker-compose -f local.yml up
```

Execute Management Commands

```bash
$ docker-compose -f local.yml run --rm django python manage.py makemigration
$ docker-compose -f local.yml run --rm django python manage.py migrate
$ docker-compose -f local.yml run --rm django python manage.py createsuperuser
```

Import Texts
```
docker-compose -f local.yml run --rm django python manage.py import_texts /var/parkhang/data/texts སྡེ་དགེ
```

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

The redux files are stored in:

* `actions`

* `reducers`

[Selectors](http://redux.js.org/docs/recipes/ComputingDerivedData.html#connecting-a-selector-to-the-redux-store) are used for accessing state, and are stored in the related reducer file.

[Container](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components) components are used to access data from the store and pass them onto child components using the bundled [`connect`](http://redux.js.org/docs/basics/UsageWithReact.html#implementing-container-components) function. These usually have the name Container appended to them. They will also pass on event-handling functions, so that the child components need to need the least possible about the app's state.

###### React

React components are stored in

* `components`

## Code notes

#### Text rendering

Texts are split into numerous substrings and displayed in a list using the [react-virtualized](https://github.com/bvaughn/react-virtualized) library. This enables even long texts to be rendered and updated smoothly, even on mobile devices.

These split texts are represented as instances of [`lib/SplitText.js`](parkhang/frontend/app/lib/SplitText.js) and are rendered using the [`components/TextDetail/SplitText.js`](parkhang/frontend/app/components/TextDetail/SplitText.js) component, which wraps a react-virtualized [List](https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md).

The html generation is performed by the [Text.js](parkhang/frontend/app/components/TextDetail/Text.js) component.

#### [SegmentedText.js](parkhang/frontend/app/lib/SegmentedText.js)

Texts are segmented into syllables before rendering, and are represented as an instance of [SegmentedText](parkhang/frontend/app/lib/SegmentedText.js). Each syllable can then be wrapped by a span with an id related to it's position in the text. This allows the position of a syllable within a text to be known even if markup is added e.g. to highlight certain sections.

This also prevents grapheme clusters (e.g. stacked characters) being split.

#### [AnnotatedText.js](parkhang/frontend/app/lib/AnnotatedText.js)

This is the main class for generating texts. Annotations can be added, and the text is altered accordingly for display to the user.

#### [Annotation.js](parkhang/frontend/app/lib/Annotation.js)

Annotations have a UUID which is used by the API for CRUD operations related to annotations. This enables the client to generate valid ids without a connection to the server.

## Deployment

### Dokku

#### Setup App

To install on an existing dokku server:

#### Import data

1. `rsync` texts into the apps data dir

        rsync --partial --progress -a ./data/texts/ root@test.nalanda.works:/var/lib/dokku/data/storage/nalanda-works/data/texts/

# TODO: need to install dwdiff inside container - just copy binary from host?

### Deployment with Docker

You will need to build the stack first. To do that, run:

```bash
docker-compose -f production.yml build
```

Once this is ready, you can run it with:

```bash
docker-compose -f production.yml up
```

To run the stack and detach the containers, run:
```bash
docker-compose -f production.yml up -d
```

To run a migration, open up a second terminal and run:

```bash
docker-compose -f production.yml run --rm django python manage.py migrate
```

To create a superuser, run:

```bash
docker-compose -f production.yml run --rm django python manage.py createsuperuser
```

If you need a shell, run:

```bash
docker-compose -f production.yml run --rm django python manage.py shell
```

To check the logs out, run:

```bash
docker-compose -f production.yml logs

### Setting up Discourse user account integration

The following environment variables need to be set for users to login using their account from a discourse server.

    DISCOURSE_SSO_KEY
    A randomly generated string, preferably 64 characters or more.

    DISCOURSE_SSO_REDIRECT
    e.g. https://<server_url>/discourse/sso/

    DISCOURSE_SSO_LOGIN_URL
    e.g. https://<discourse_server_url>/session/sso_provider

    DISCOURSE_SSO_SIGNUP_URL
    e.g. https://<discourse_server_url>/signup

    DISCOURSE_SITE
    e.g. https://<discourse_server_url>

    DISCOURSE_API_KEY
    Generated on the Discourse site's Admin > API section by an admin user.
    The User needs to be defined as All Users.

    DISCOURSE_SYSTEM_USER
    Usually 'system'

    DISCOURSE_QA_CATEGORY_ID
    The ID of the Topic used to post questions from a parkhang instance.
    e.g. 4

