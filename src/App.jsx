const app = {
  title: 'Indecision App',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam.',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  let option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderFormLength();
  }
  
}

const clearArray = () => {
  app.options = [];
  renderFormLength();
}

const root = document.querySelector("#app");

const renderFormLength = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle && app.subtitle}</p>
      <p>{app.options.length > 0 ? "Here are your options" : "No options at all"}</p>
      <p>{app.options.length}</p>

      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>

      <button onClick={clearArray}>Clear</button>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>

    </div>
  );
  
  ReactDOM.render(template, root);
}

renderFormLength();