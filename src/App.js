// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// So they guy in course said that we are going to make our own App.js
// but becuase i like to keep comments in muy own personal projects, which is NOT the case in actual business, we are going to just comment the original out, in case i want to modify this
// (yes i know i can just rollback in git, but i like this more)
// and then we are going to write our own below for funsies.

// there are some differences between the course nad my app, the course says  'import React from 'react';' but thats old react.
// new react doesnt require you to do this. 
// actually i might be worng, because maybe the return thing needs something from the React module, who knows.
import React from 'react';
// he sucsk becuase he doesnt explain why it looks like this. 
// What i think it means is that...
// const Router = require('react-router-dom').BrowserRouter();
// ^ is basically what import is i think.
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return(
    // another reason why he sucks, is he doesnt explain why we are encasing this in a Router.
    // it worked before!
    <Router>
    <div className="container">
      Hello world!
    </div>
    </Router>
  );
}

export default App;