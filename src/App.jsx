var root = document.querySelector("#app");

var app = {
  title: 'Indecision App',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam.',
  options: ['create', 'read', 'update', 'delete']
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle && app.subtitle}</p>
    <p>{app.options.length > 0 ? "Here are your options" : "No options at all"}</p>
  </div>
);

var user = {
  name: 'Fernando',
  age: 19,
  location: 'Alagoas'
};

function getLocation(location) {
  if(location) 
    return <p>Location: {location}</p>
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>{(user.age && user.age >= 18) && `Age: ${user.age}`}</p>
    <p>{getLocation(user.location)}</p>
  </div>
);

// Can't pass more than one var as parameter
// We need to put them on an array
ReactDOM.render([template, templateTwo], root);