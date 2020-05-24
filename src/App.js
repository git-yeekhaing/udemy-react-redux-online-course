import React, {Component} from 'react';

const App = () => {
 const profiles = [
  {name: "Tora", age: 10},
  {name: "Hanako", age:5},
  {name: "Naomi"}
 ]

  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>    
        })
      }      
    </div>
    );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.defaultProps = {
  age:1
}

// const App = () => {
//   return(
//     <div>
//       <Cat/>
//       <Cat/>
//       <Cat/>
//       <Cat/>
//     </div>
//     );
// }

// const Cat = () => {
//   return <div>Meow!</div>
// }

// class App extends Component{
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">Bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}}/>
//       </React.Fragment>
//       );
//   }
// }


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
