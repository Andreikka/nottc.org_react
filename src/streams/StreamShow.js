import React from "react";
import { connect } from 'react-redux';
import { fetchStream } from '../actions';
import NavMenu from '../streams/nav';
import Slider from "react-slick"; 


class StreamShow extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  

  render() {
    var col_settings = {
      paddingTop:'350px'
    }
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 3, 
   
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    if (!this.props.stream) {
      return <div className="loader"></div>
    }
    return <div>
       <div className="container-fluid">
    <div className="row">
      <div className="col box-top" style={{height:'100%', backgroundImage: 'url(' + this.props.stream.image_poster + ')',backroundSize: 'fixed',backgroundPosition: 'center top'}}>
        <div className="bg_dark2"></div>
        <div className="container">

          <NavMenu />

<div className="col box-details home-details" style={col_settings}>
                      <img src={this.props.stream.network_img} alt=""/>
    				  					<h2 class="stream_title bold"> {this.props.stream.title}</h2>
    					  				<div class="subtitle">
    					  					<p>{this.props.stream.show_slogan}</p>
                          <p>{this.props.stream.show_date}</p>
    					  				</div>
                  </div>

                  <div class="row">
                <div class="col">
                  <a href="/" class="btn btn-custom-green ">DVR This NOW</a>

                    
                  
                  </div>
                  </div>
                  <Slider {...settings}>
          <div>
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src="images/episode1.png" alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
          <div>
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src="images/episode1.png" alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
          <div>
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src="images/episode1.png" alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
          <div>
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src="images/episode1.png" alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
          <div>
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src="images/episode1.png" alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
          <div>
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src="images/episode1.png" alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
        </Slider>

        <div class="clips-extras" style={{position: 'relative'}}>
                    <div class="uppercase bold about-text custom-title">
                      Clips &amp; Extras
                    </div>
        <Slider {...settings}>
        <div>
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src="images/episode1.png" alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
          <div>
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src="images/episode1.png" alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
        </Slider>
        </div>
        </div>
      </div>
      </div>
    </div>


    <div class="container-fluid show-desc">
        <div class="container">
          <div class="row align-items-center">
            <div class="col">

              <div class="uppercase bold about-text">
                ABOUT THE SHOW
              </div>

              <div class="about-subtext">
                TV-14 | 12 SEASONS | Comedy , Romance
              </div>

              <div class="about-story" style={{color: '#fff'}}>
                {this.props.stream.description}
              </div>

              <a href="/" class="btn btn-custom-green ">DVR This NOW</a>

            </div>
          </div>
        </div>
      </div>


  </div>
  };
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchStream}) (StreamShow);