'use strict';

var app = {
  title: 'Visibility Toggle',
  text: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae ipsam maxime asperiores, officiis nulla illo nemo sint ipsa nobis corrupti dolorem quo sunt ea. Tempora nulla laboriosam iusto hic ipsam fuga, aspernatur animi quod impedit, laborum facere sequi commodi quibusdam perspiciatis atque. Porro natus reprehenderit aut sint quae. Minus deserunt reprehenderit voluptates aperiam veritatis beatae iure in, sapiente cupiditate ab quia expedita ea omnis, magni eveniet! Est molestias quo cupiditate culpa similique? Architecto doloribus qui illum iusto tempora. Consequuntur ratione omnis eos consectetur qui odit, nihil sunt laborum, architecto enim molestias accusamus aliquam quia suscipit facere nulla? Delectus odit perferendis, doloribus, alias, suscipit odio neque soluta esse dignissimos rerum illo voluptatum quaerat nobis voluptates. Placeat aliquam consectetur atque quo voluptatem a vitae at ad officia ex praesentium, animi suscipit harum magnam neque natus aspernatur quasi ea pariatur eum molestias? Animi similique autem illum sint tempora. Obcaecati eaque dolor magni natus quaerat ut iusto odit, odio minima adipisci quis id et quia eum error quas earum ullam consequuntur! Veniam, eligendi. Ducimus labore quisquam quasi maxime qui sapiente deleniti voluptates non quibusdam fugit ratione impedit incidunt odio excepturi laboriosam earum, eum accusamus possimus. Aliquam esse, dolores ducimus corporis unde, eligendi odio velit distinctio, reprehenderit perspiciatis libero ab nulla repellat quaerat optio architecto incidunt nesciunt soluta inventore quisquam ipsa? Molestiae suscipit non itaque sit fugiat, reiciendis neque unde debitis illo omnis culpa ut sed ratione quis, sint nisi ipsum distinctio! Nobis assumenda unde ea, officiis cumque repudiandae alias cupiditate odit adipisci quidem ex sed magnam esse quo facilis, temporibus consequuntur vel nostrum. Deserunt odio pariatur minus aliquam similique aspernatur quisquam quam suscipit beatae, odit vero magni illo quas sunt? Minus earum tempore laudantium aspernatur nam eligendi, nihil quae similique praesentium ipsam, nostrum aperiam in non quod adipisci pariatur ipsa vitae, soluta sunt? '
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var limitDescription = function limitDescription(text, size) {
  if (text.length > size) {
    return text.substr(0, size) + ' [...]';
  } else {
    return text;
  }
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
      app.text && visibility && limitDescription(app.text, 400)
    )
  );

  ReactDOM.render(template, root);
};

render();
