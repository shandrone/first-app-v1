import React from "react";

//declaring components, two different sytaxes, stateless, es6

function HelloWorld(props) {
  //this is props bases syntax
  return <h1>This hello from {props.name}</h1>;
}

class HelloWorld_2 extends React.Component {
  render() {
    //this is class based syntax
    return <h1> Hello from Class based syntax {this.props.name} </h1>;
  }
}

export default HelloWorld_2;
