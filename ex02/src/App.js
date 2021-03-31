import React, { Component } from 'react';

class App extends Component {

    getMyStorage = () => {
    document.cookie= "Year=2021";
    localStorage.getItem('Paragon', 'yes, but Arena first');
    sessionStorage.getItem('frontend', 'React');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getMyStorage} >Click</button>
      </div>
    );
  }
}

export default App;
