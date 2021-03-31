import React, { Component } from 'react';

class App extends Component {

  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  }

  getLocalStorage = () => {
    localStorage.getItem('Arena')
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage} >Set Click</button>
        <button onClick={this.getLocalStorage}>Get Click</button>
      </div>
    );
  }
}

export default App;
