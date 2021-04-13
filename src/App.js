<<<<<<< HEAD
/* import logo, { ReactComponent } from './logo.svg'; */
import React, { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json'
import Tasks from './components/tasks.js'

class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return (
      <div>
        <Tasks tasks={this.state.tasks} />
      </div>
    )
  }
}
  


=======
import React from 'react';
import './App.css';

import Header from './components/header.js';
import Home from './components/home.js';
import Footer from './components/footer.js';


function App() {
  return (
    <div className="App">
      
      
      <Header />
      
      
      <Home />
     
      
      <Footer />
    </div>
  );
>>>>>>> a68d50442317ddb050747bd69250add5802d4055

}

export default App;
