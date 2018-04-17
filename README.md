# next-5-app
"Next 5" Web app that consumes an API and lists of the next 5 races that are opened for betting.

## Technologies Used

  - [NodeJs](https://nodejs.org/en/) >= 6.11.0
  - [React](https://facebook.github.io/react/)
  - [Redux](http://redux.js.org/)
  - [ES6](http://es6-features.org/)
  - [Webpack](https://webpack.github.io/)
  - [Babel](https://babeljs.io/)

## Directory Structure

`web` houses the `webpack` configs and `index.html`.
It is also the destination of the minified bundle.


## Entry Point

The entry point the web app is `app/web/index.js`.


### Running the project

Beware [Next 5 server](https://github.com/eperico/next-5-server) server needs to be running to fech the data

1. Run `npm start`
2. Open your browser on http://localhost:4000