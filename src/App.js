import React, { Component } from 'react';
import Tiles from "./components/Tiles";
import Body from "./components/Body";
import Header from "./components/Header";
import dogs from "./dogs.json";
import './App.css';

class App extends Component {
  state = {
      dogs, 
      score: 0,
      highscore: 0
  };

//counting scores
  clickCount = id => {
    this.state.dogs.find((h, i) => {
      if (h.id === id) {
          if (dogs[i].count === 0) {
              dogs[i].count = dogs[i].count + 1;
              this.setState({ score: this.state.score + 1 }, function () {
                  console.log(this.state.score);
              });
              this.state.dogs.sort(() => Math.random() - 0.5)
              return true;
          } else {
              this.endGame();
          }
      }
  });
  }

    //endgame
    endGame = () => {
      if (this.state.score > this.state.highscore) {
          this.setState({ highscore: this.state.score }, function () {
              console.log(this.state.highscore);
          });
      }
      this.state.dogs.forEach(dogPic => {
          dogPic.count = 0;
      });
      alert(`Game...OVER! The Final Score:\n ${this.state.score}`);
      this.setState({ score: 0 });
      return true;
  }

  //render dogs
  render() {
      return (
          <Body>
              <Header score={this.state.score} highscore={this.state.highscore}>Dog Image Click Game</Header>
              {this.state.dogs.map(dogPic => (
                  <Tiles
                      clickCount={this.clickCount}
                      id={dogPic.id}
                      key={dogPic.id}
                      image={require(`${dogPic.image}`)}
                  />
              ))}
          </Body>
      );
  }


}


export default App;
