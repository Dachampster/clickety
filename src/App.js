import React, { Component } from 'react';
import Produce from "./components/Produce";
import produceList from "./produce.json"
import './App.css';

const initial = {
  produceList,
  score: 0,
};

class App extends Component {
  state = initial;


  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  handleClick = (id) => {
    let item = this.state.produceList[ id - 1];
    console.log(item);
    // check the image property "clicked"
    // if !clicked, do the following:
    if(!item.clicked) {
      this.setState({score : this.state.score + 1});
      this.shuffle(produceList);
      item.clicked = true;
    }
    else{
      alert("You Lost.");
      this.setState({score : 0});
      this.state.produceList.forEach(item => {
        item.clicked = false;
      });
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.score}</h1>
        {this.state.produceList.map(item => (
          <Produce
            id={item.id}
            pic={item.pic}
            handleClick = {this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
