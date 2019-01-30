var root = document.querySelector("#app");

var template = (
  <div>
    <h1>Hello world!</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Fernando Augusto</h1>
    <p><strong>Age:</strong> 19</p>
    <p><strong>Location:</strong> Maceió</p>
  </div>
);

// Can't pass more than one var as parameter
// We need to put them on an array
ReactDOM.render([template, templateTwo], root);