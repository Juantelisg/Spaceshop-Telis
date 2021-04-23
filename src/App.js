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

}

/* const task = new Promise((resolve, reject)=> {
  const objetos = [
    {
      id: 'zed',
      value: '$300'
    },
    {
      id: 'ashe',
      value: '$500'
    }
  ]
  resolve(true)
})

task.then((res)=>{
  console.log("resuelta-------->", res)
  throw new Error()
  console.log("esto nunca va a suceder")
}, (rej)=>{
  console.log("rechazada ---->", rej)
})
.then(()=>{
  console.log("segundo then")
})
.catch((err)=>{
  console.log("hubo un error")
})
.finally(()=>{
  console.log("por fin termine")
})


*/
export default App;
 