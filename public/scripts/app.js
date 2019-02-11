'use strict';

var app = {
  title: 'Visibility Toggle',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat nihil magni aut aliquid non a sunt provident ipsa, numquam quis sint iure inventore id quasi voluptates? Autem reiciendis distinctio rem aut beatae cumque, repellat optio voluptatem, veritatis, aperiam nulla. Laboriosam autem deleniti quos maiores nesciunt accusantium numquam amet rem. '
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var root = document.querySelector("#app");

var render = function render() {
  var template = React.createElement(
    'div',
    { className: 'wrap' },
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide element' : 'Show element'
    ),
    React.createElement(
      'p',
      null,
      app.text && visibility && app.text
    )
  );

  ReactDOM.render(template, root);
};

render();
