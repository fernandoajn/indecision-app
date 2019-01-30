var root = document.querySelector("#app");

var app = {
  title: 'Indecision App',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam.'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

var user = {
  name: 'Fernando',
  age: 19,
  location: 'Alagoas'
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p><strong>Age:</strong> {user.age}</p>
    <p><strong>Location:</strong> {user.location}</p>
  </div>
);

// Can't pass more than one var as parameter
// We need to put them on an array
ReactDOM.render([template, templateTwo], root);