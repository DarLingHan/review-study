// import React from 'react';
// import React from './react';
import React from './test';
import ReactDOM from './test';
// import ReactDOM from 'react-dom';
// import ReactDOM from './react-dom';

// jsx = js = xml(html)
// let ele = <h1 className="a">hello<span>world</span></h1>
let ele2 = React.createElement(
  "h1",
  {className: 'a'},
  "hello",
  React.createElement("span", null, 'world')
)
// console.log(ele)
console.log(ele2)

ReactDOM.render(
  ele2,
  document.getElementById('root')
);

// jsx——》通过babel转换成react.createElement——》虚拟dom——》render——》渲染成真实DOM
