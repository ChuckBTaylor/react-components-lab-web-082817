import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];



// Define these exported classes
export class OlderCoaster extends React.Component {
  render(){
    return React.createElement('div',{className: "oldercoaster"},
    [
      React.createElement('p', null, "Two Grannies having the time of their life!"),
      React.createElement('p', null, "Passengers:"),
      React.createElement('ul', null,
      [
        React.createElement('li', null, "Agnes"),
        React.createElement('li', null, "Muriel")
      ])
  ])
  }
};

export class InFrontOfYou extends React.Component {
  render(){
    return React.createElement('div', null,
    [
      React.createElement('p', null, "You shouldn't look too far."),
      React.createElement('p', null, "Sometimes, the solution is right in front of you.")
    ])
  }
};

export class ButcherShop extends React.Component {
  render(){
    return React.createElement('div', {className: 'butcher-shop'},
    [
      React.createElement('p', null, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', null,
        BUTCHER_PRODUCTS.map(product => React.createElement('li', null, product))
      )  
    ])
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
