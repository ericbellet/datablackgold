import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <a href="#home">Home</a>
        <a href="#news">What we do</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact</a>
      </div>
   
      <section className="App-section">
        <p>
          Section
        </p>
      </section>
         
      <content className="App-content">
        <p>
          Content
        </p>       
      </content>

      <footer className="App-footer">
        <p>
          Footer
        </p>     
      </footer>
    </div>
  );
}

export default App;
