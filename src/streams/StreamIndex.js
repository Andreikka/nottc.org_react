import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../actions';
import Slider from "react-slick";
import NavMenu from '../streams/nav';
class StreamIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    componentDidMount() {
        this.props.fetchStreams();
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
          });
    }
    thumbList() {
        
        return this.props.streams.map(stream => {
             
            return (
                
                <div key={stream.id}>
                       
                       <img src={stream.image_thumb} alt=""></img> 
                </div>
            );
        });
    }
    

    streamsList() {
        
        return this.props.streams.map(stream => {
            var slideBg = {
                backgroundImage: 'url(' + stream.image_poster + ')',
                backgroundSize: 'cover',
                width: '100%',
                backgroundPosition:'center center',
                height: '100vh'
              };
              var slideOptions = {
                paddingTop:'350px'
              };
             
            return (
                
                <div key={stream.id}>
                    
                    <div style={slideBg}>
                    
                <div className="container ps11" style={slideOptions}>
                
                    <div className="col box-details home-details">
                      <img style={{width:'12%'}} src={stream.network_img} alt=""/>
    				  					<h2 class="stream_title bold"> {stream.title}</h2>
    					  				<div class="subtitle">
    					  					<p>{stream.show_slogan}</p>
                          <p>{stream.show_date}</p>
    					  				</div>
    					  				<div className="row">
    										<div className="col">
    											<Link to={`/streams/show/${stream.id}`} className="btn btn-custom-green ">More</Link>
                          <div className="subtitle defaultsub uppercase bold">
                         Trending NOW
                        </div>
    										</div>
                        
    									</div>
    				  			</div>
              
                    </div>
                </div>
                <div class="bg_dark"></div>
                </div>
            );
        });
    }


    render() {
        
        const settings = {
            customPaging: function(i) {
                return (
                  <a href="/stream/1">
                    <img src={`/images/thumb.png`} alt=""/>
                  </a>
                );
              },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,  
            autoplay: true,
            speed: 400,
            autoplaySpeed: 3000,
            cssEase: "linear",
          };
        return (
            
            <div className="slide">
            
                 <NavMenu />

<Slider {... settings}>
        {this.streamsList()}
</Slider>

</div>
        
        )
    }
 
}

const mapStateToProps = state => {
    return { streams: Object.values(state.streams)};
};

export default connect(mapStateToProps, {fetchStreams}) (StreamIndex);