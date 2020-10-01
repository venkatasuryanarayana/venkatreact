import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

//stateless component
// function App() {
  // return React.createElement('h2','null','Raja');
  // return React.createElement('h2',{style:{color:"red"}},'Raja');

//jsx combination html tags and javascript expressions
  // return(
  //   <div>
  //   <h2>venkat</h2>  
  //   <h2>Narla</h2>   
  //   <h3>{4+5}</h3>  
  //   </div>
  // );

// return <div><h2>Surya</h2><h2>Narla</h2></div>

// }

//statefull component

class App extends React.Component {
  render(){
    return(
      React.createElement('div',null,'Raja')
      React.createElement('div',null,React.createElement('h2',null,'surya'))
      //If you are not mentioned any class or id then u will giuve null
      React.createElement('div',{style:{background:'yellow'}},React.createElement('h2',null,React.createElement('p',null,'Rajesh')))
      React.createElement('div',{id:'surya'},React.createElement('h2',null,React.createElement('p',null,'Rajesh')))
    );
  }
}

// function App(){
//   const x=(
//     <div>
//     <h1>surya</h1>
//     <h1>Narla</h1>

//     </div>
//   );
//   return(
// ReactDOM.render(x,document.getElementById('root'))
//   )
// }



  
export default App;
