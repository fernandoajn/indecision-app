"use strict";

var root = document.querySelector("#app");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Hello world!"
  ),
  React.createElement(
    "p",
    null,
    "Lorem ipsum dolor sit amet."
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    ),
    React.createElement(
      "li",
      null,
      "Item three"
    )
  )
);

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Fernando Augusto"
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "strong",
      null,
      "Age:"
    ),
    " 19"
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "strong",
      null,
      "Location:"
    ),
    " Macei\xF3"
  )
);

// Can't pass more than one var as parameter
// We need to put them on an array
ReactDOM.render([template, templateTwo], root);
