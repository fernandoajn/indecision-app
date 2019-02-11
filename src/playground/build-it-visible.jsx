const app = {
  title: 'Visibility Toggle',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat nihil magni aut aliquid non a sunt provident ipsa, numquam quis sint iure inventore id quasi voluptates? Autem reiciendis distinctio rem aut beatae cumque, repellat optio voluptatem, veritatis, aperiam nulla. Laboriosam autem deleniti quos maiores nesciunt accusantium numquam amet rem. ',
}

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
}

const root = document.querySelector("#app");

const render = () => {
  const template = (
    <div className="wrap">
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide element' : 'Show element'}
      </button>
      <p>{app.text && visibility && app.text}</p>
    </div>
  )

  ReactDOM.render(template, root);
}

render();