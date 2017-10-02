import React, {Component } from 'react';
import data from './data.json';
import Slide from './slide';
import scrollTo from './scrollToAnimate';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfSlides: 4
    }
  }
  
  handleLeftNav = (e) => {
    console.log('left clicked', this)
    const { carouselView } = this.refs;
    var numOfSlides = this.state.numOfSlides;
    var widthOfSlides = 120;
    var newPos = carouselView.scrollLeft -  (numOfSlides * widthOfSlides); 
    var timeToMoveOneSlide = 200;
    var totalTimeToMove = Math.min((numOfSlides * timeToMoveOneSlide ), 400);
    carouselView.scrollLeft = newPos;
    scrollTo(carouselView, newPos, totalTimeToMove, 'scrollLeft');

  }
  
  handleRightNav = (e) => {
    console.log('right clicked', this)
    const { carouselView } = this.refs;
    var numOfSlides = this.state.numOfSlides;
    var widthOfSlides = 120;
    var newPos = carouselView.scrollLeft +  (numOfSlides * widthOfSlides); 
    var timeToMoveOneSlide = 200;
    var totalTimeToMove = Math.min((numOfSlides * timeToMoveOneSlide ), 400);
    carouselView.scrollLeft = newPos;
    scrollTo(carouselView, newPos, totalTimeToMove, 'scrollLeft');
  }
  
  renderSlides() {
    return data.map((state) => {
      return (<Slide 
        name= {state.name} 
        key= {state.abbreviation}
        />
      )
    })
  }
  render() {
    return (
      <div >
        <div className="carousel-container">
          <button className="carousel-nav carousel-left-nav" onClick = {this.handleLeftNav}> &#60;</button>
            <div className="carousel-view" ref="carouselView">
              {this.renderSlides()}
            </div>
          <button className="carousel-nav carousel-right-nav" onClick = {this.handleRightNav}> &#62;</button>

        </div>
      
    </div>
    )
  }
}

export default Carousel;