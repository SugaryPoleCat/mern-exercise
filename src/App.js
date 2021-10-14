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
import 'bootstrap/dist/css/bootstrap.min.css';

// lets import the components we are going to use in our App();
import Navbar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import ExerciseEdit from './components/exercise-edit.component';
import ExerciseCreate from './components/exercise-create.component';
import UserCreate from './components/user-create.component';
function App() {
  return (
    // another reason why he sucks, is he doesnt explain why we are encasing this in a Router.
    // it worked before!
    <Router>
      {/* <div className="container">
      Hello world!
    </div> */}

      {/* update: I know why he did router now as i follow along. it will make the ROUTES to our routes. damn , im dumb */}
      <Navbar />
      <br />
      {/* Path attrivbute is the url path. */}
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={ExerciseEdit} />
      <Route path="/create" component={ExerciseCreate} />
      <Route path="/user" component={UserCreate} />
    </Router>
  );
}

export default App;