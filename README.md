# next-5-app
"Next 5" Web app that consumes an API and list of the next 5 races that are open for betting.

## Technologies Used

  - [NodeJs](https://nodejs.org/en/) >= 6.11.0
  - [React](https://facebook.github.io/react/)
  - [Redux](http://redux.js.org/)
  - [Webpack](https://webpack.github.io/)
  - [Babel](https://babeljs.io/)

## Directory Structure

`web` houses the `webpack` configs and `index.html`.
It is also the destination of the minified bundle.


## Entry Point

The entry point the web app is `app/web/index.js`.

## Configured Scripts

### Running in dev/production

There are 2 defined scripts in package.json:

  1. `start`
  2. `bundle`


`start` kicks off a development webpack server on port 4000, it utilizes hot reloading
with some redux time machine capabilities.

You can have a look at the [Redux dev tool extension](https://github.com/zalmoxisus/redux-devtools-extension)

Also make sure you have the [Chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?utm_source=chrome-app-launcher-info-dialog) to avoid Access-Control-Allow-Origin issue running locally


`bundle` creates a minified JavaScript bundle (that also houses the minified
css) and places it next to the `index.html` in `web/public` that you can serve
with any static file server.

