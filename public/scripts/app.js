'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam.',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderFormLength();
  }
};

var clearArray = function clearArray() {
  app.options = [];
  renderFormLength();
};

var onMakeDecision = function onMakeDecision() {
  var random = Math.floor(Math.random() * app.options.length);
  var option = app.options[random];
  alert(option);
};

var root = document.querySelector("#app");

var renderFormLength = function renderFormLength() {
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
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: clearArray },
      'Remove all'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option', autoFocus: true }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(template, root);
};

renderFormLength();
