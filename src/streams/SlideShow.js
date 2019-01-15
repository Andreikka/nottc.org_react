import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
        
          slidesToScroll= {1}
        >
          <div>
            <img src="/images/kidding.png" alt=""></img>
          </div>
          <div>
          <img src="/images/kidding.png" alt=""></img>
          </div>
          <div>
          <img src="/images/kidding.png" alt=""></img>
          </div>
          <div>
          <img src="/images/kidding.png" alt=""></img>
          </div>
          <div>
          <img src="/images/kidding.png" alt=""></img>
          </div>
        </Slider>
      
      <div class="container-fluid" style={{position:'absolute', bottom:'0'}}>
        <div class="container episodesshow">
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          slidesToScroll={1}
          swipeToSlide={true}
          focusOnSelect={true}
          infinite={false}
          arrows={true}
        >
          <div>
          <img src="/images/thumb.png" alt=""></img>
          </div>
          <div>
          <img src="/images/thumb.png" alt=""></img>
          </div>
          <div>
          <img src="/images/thumb.png" alt=""></img>
          </div>
          <div>
          <img src="/images/thumb.png" alt=""></img>
            </div>
            <div>
          <img src="/images/thumb.png" alt=""></img>
            </div>
        </Slider>
        </div>
        </div>

      </div>
    );
  }
}