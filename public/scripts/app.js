'use strict';

var root = document.querySelector("#app");

var app = {
  title: 'Indecision App',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam.'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var user = {
  name: 'Fernando',
  age: 19,
  location: 'Alagoas'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'strong',
      null,
      'Age:'
    ),
    ' ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'strong',
      null,
      'Location:'
    ),
    ' ',
    user.location
  )
);

// Can't pass more than one var as parameter
// We need to put them on an array
ReactDOM.render([template, templateTwo], root);
