import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

const Layout = props => {
  return (
    <div>
      {props.children}
      <div>footer</div>
    </div>
  )
}

ReactDOM.render((
  <Layout> 
    <div>
      <h1>App</h1>
      <p>App description</p>
    </div>
  </Layout>
), document.querySelector('#app'));