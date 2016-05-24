import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Coverflow from '../../src/Coverflow';
import sampleSize from 'lodash/samplesize';
import random from 'lodash/random';

class Example1 extends Component {
  constructor(props) {
    super(props);
    this._setDefaultCovers();
    this.state = {covers: this._randomCovers()};
    this.changeCovers = this.changeCovers.bind(this);
  }

  changeCovers() {
    this.setState({covers: this._randomCovers()});
  }

  render() {
    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
        >
          {this.state.covers}
        </Coverflow>

        <div className="text-center">
          <button 
            className="btn btn-primary"
            onClick={this.changeCovers}>
            Update
          </button>
        </div>
      </div>
    );
  }

  _setDefaultCovers() {
    this.covers = [
      <img src='images/album-1.png' alt='Album one' url="https://facebook.github.io/react/"/>,
      <img src='images/album-2.png' alt='Album two' url="http://passer.cc"/>,
      <img src='images/album-3.png' alt='Album three' url="https://doce.cc/"/>,
      <img src='images/album-4.png' alt='Album four' url="http://tw.yahoo.com"/>,
      <img src='images/album-5.png' alt='Album five' url="http://www.bbc.co.uk"/>,
      <img src='images/album-6.png' alt='Album six' url="https://medium.com"/>,
      <img src='images/album-7.png' alt='Album seven' url="http://www.google.com"/>,
      <img src='images/album-1.png' alt='Album one' url="https://facebook.github.io/react/"/>,
      <img src='images/album-2.png' alt='Album two' url="http://passer.cc"/>,
      <img src='images/album-3.png' alt='Album three' url="https://doce.cc/"/>,
      <img src='images/album-4.png' alt='Album four' url="http://tw.yahoo.com"/>,
      <img src='images/album-5.png' alt='Album five' url="http://www.bbc.co.uk"/>,
      <img src='images/album-6.png' alt='Album six' url="https://medium.com"/>,
      <img src='images/album-7.png' alt='Album seven' url="http://www.google.com"/>,
      <img src='images/album-1.png' alt='Album one' url="https://facebook.github.io/react/"/>,
      <img src='images/album-2.png' alt='Album two' url="http://passer.cc"/>,
      <img src='images/album-3.png' alt='Album three' url="https://doce.cc/"/>,
      <img src='images/album-4.png' alt='Album four' url="http://tw.yahoo.com"/>,
      <img src='images/album-5.png' alt='Album five' url="http://www.bbc.co.uk"/>,
      <img src='images/album-6.png' alt='Album six' url="https://medium.com"/>,
      <img src='images/album-7.png' alt='Album seven' url="http://www.google.com"/>,
      <img src='images/album-1.png' alt='Album one' url="https://facebook.github.io/react/"/>,
      <img src='images/album-2.png' alt='Album two' url="http://passer.cc"/>,
      <img src='images/album-3.png' alt='Album three' url="https://doce.cc/"/>,
      <img src='images/album-4.png' alt='Album four' url="http://tw.yahoo.com"/>,
      <img src='images/album-5.png' alt='Album five' url="http://www.bbc.co.uk"/>,
      <img src='images/album-6.png' alt='Album six' url="https://medium.com"/>,
      <img src='images/album-7.png' alt='Album seven' url="http://www.google.com"/>
    ];
  }

  _randomCovers() {
    return sampleSize(this.covers, random(1, 10));
  }
}

ReactDOM.render(<Example1 />, document.querySelector('.example_1'));

ReactDOM.render(
  <Coverflow
    displayQuantityOfSide={2}
    navigation={true}
    enableHeading={true}
    media={{
      '@media (max-width: 900px)': {
        width: '600px',
        height: '300px'
      },
      '@media (min-width: 900px)': {
        width: '960px',
        height: '600px'
      }
    }}
    >
    <img src='images/album-1.png' alt='Album one' url="https://facebook.github.io/react/"/>
    <img src='images/album-2.png' alt='Album two' url="http://passer.cc"/>
    <img src='images/album-3.png' alt='Album three' url="https://doce.cc/"/>
    <img src='images/album-4.png' alt='Album four' url="http://tw.yahoo.com"/>
  </Coverflow>
  ,
  document.querySelector('.example_2')
);
