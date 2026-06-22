import './App.css';
import Student from './student';
import Count from './Count'
import React from 'react';
function App() {
  return (
    <div className="App">
      <h1>Student Management Details</h1>
      <Student />
      <div>{React.createElement("h1",null," Counter")}</div>
      <Count/>
    </div>
  );
}

export default App;