import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={ peopleInSpace: 0 }
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        peopleInSpace: data.number})
    })
  }


  render() {
    return (
      <div>
        
      </div>
    );
  }
}


export default App;
