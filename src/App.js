import React, {Component} from 'react';

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <label htmlFor="bar">Bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}}/>
      </React.Fragment>
      );
  }
}



// class App extends Component{
//   render(){
//     const greeting = "Hi, Tom";
//     const dom = <h1>{greeting}</h1>;
//     return dom;
//   }
// }

// class App extends Component{
//   render(){
//     const dom = <h1>Hello, World!</h1>;
//     return dom;
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <h1>Hello, World!</h1>
//       );
//   }
// }

// class App extends Component{
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello, World!!"
//       );
//   }
// }

export default App;
