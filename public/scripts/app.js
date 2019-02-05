'use strict';

var root = document.querySelector("#app");

var app = {
  title: 'Indecision App',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam.',
  options: ['create', 'read', 'update', 'delete']
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
    app.subtitle && app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? "Here are your options" : "No options at all"
  )
);

var count = 0;
var addOne = function addOne() {
  console.log("add one");
};

var minusOne = function minusOne() {
  console.log("minus one");
};

var reset = function reset() {
  console.log("reset");
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

// Can't pass more than one var as parameter
// We need to put them on an array
ReactDOM.render(templateTwo, root);
