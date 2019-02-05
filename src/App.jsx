const root = document.querySelector("#app");

const app = {
  title: 'Indecision App',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam.',
  options: ['create', 'read', 'update', 'delete']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle}</p>
    <p>{app.options.length > 0 ? "Here are your options" : "No options at all"}</p>
  </div>
);

let count = 0;
const addOne = () => {
  console.log("add one");
}

const minusOne = () => {
  console.log("minus one");
}

const reset = () => {
  console.log("reset");
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

// Can't pass more than one var as parameter
// We need to put them on an array
ReactDOM.render(templateTwo, root);