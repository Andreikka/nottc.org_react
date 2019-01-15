import React, {Component} from "react";
import { connect } from 'react-redux';
import { fetchStream } from '../actions';
// import PopularSerials from '../streams/PopularSeries'; 
import NavMenu from '../streams/nav';
import Slider from "react-slick"; 


class StreamShow extends Component {

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
      slidesToShow: 4, 
   
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
    if (!this.props.stream ||  this.props.PopularSeries) {
      return <div className="loader">
        
      </div>
      
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
    				  					<h2 className="stream_title bold"> {this.props.stream.title}</h2>
    					  				<div className="subtitle">
    					  					<p>{this.props.stream.show_slogan}</p>
                          <p>{this.props.stream.show_date}</p>
    					  				</div>
                  </div>

                  <div className="row">
                <div className="col">
                  <a href="/" className="btn btn-custom-green ">DVR This NOW</a>

                    
                  
                  </div>
                  </div>
                  <div className="episodesshow select-season">
                 
</div>
        <div className="clips-extras" style={{position: 'relative'}}>
                    <div class="uppercase bold about-text custom-title">
                      Clips &amp; Extras
                    </div>
            <div className="Sliderr">      
        <Slider {...settings}>
        <div className="slides">
          <a className="episode-link" href="/">
                          <img className="img-responsive" src="images/episode1.png" alt="" />
                          <h2 className="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
          <div className="slides">
          <a className="episode-link" href="/">
                          <img className="img-responsive" src="images/episode1.png" alt="" />
                          <h2 className="episode-title" style={{position: 'relative'}}>The Locomotion Interruption</h2>
                        </a>
          </div>
        </Slider>
</div>  
        </div>
        </div>
      </div>
      </div>
    </div>


    <div className="container-fluid show-desc">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">

              <div className="uppercase bold about-text">
                ABOUT THE SHOW
              </div>

              <div className="about-subtext">
                TV-14 | 12 SEASONS | Comedy , Romance
              </div>

              <div className="about-story" style={{color: '#fff'}}>
                {this.props.stream.description}
              </div>

              <a href="/" className="btn btn-custom-green ">DVR This NOW</a>

            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pseries">
        <div className="row">
          <div className="col use-cases-bottom2">
          <div className="container episodesshow ">
            <div className="clips-extras">
              <div className="uppercase bold about-text custom-title">
                POPULAR SERIES TO CHECK OUT
              </div>
          
            

              </div>
              </div>
              </div>
              </div>
              <div className="row footer">
      <div className="container">
        <div className="row align-items-center" style={{height: '100%'}}>
          <div className="col-md-6 col-xs-12 text-left">
            © 2018 National Over the Top Co-Op. All rights reserved.
          </div>
          <div className="col-md-6 col-xs-12 text-right social-links">
            <div className="row justify-content-end align-items-center">
              <a href="https://plus.google.com/+NOTTCORG">
                <img src="https://nottc.org/includes/images/google.png" alt="" />
              </a>
              <a href="https://www.facebook.com/nottc.org/">
                <img src="https://nottc.org/includes/images/facebook.png" alt="" />
              </a>
            </div>
          </div>
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