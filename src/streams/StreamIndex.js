import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../actions';
import PopularSerials from '../streams/PopularSeries'; 
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
        
        return (
            
            <div className="slide">
            
                 <NavMenu />

                 <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
          infinite={false}
          slidesToScroll= {1}
          initialSlide={1}
        >
            {this.streamsList()}
        </Slider>
      
      <div class="container-fluid" >
            <div class="row">
        <div class="container">
        <div style={{marginTop:'-150px'}}>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          slidesToScroll={1}
          swipeToSlide={true}
          focusOnSelect={true}
          infinite={false}
          arrows={true}
          initialSlide={1}
        >   
        {this.thumbList()}

        </Slider>
        </div>
        </div>
        </div>
        </div>

<PopularSerials />

</div>
        
        )
    }
 
}

const mapStateToProps = state => {
    return { streams: Object.values(state.streams)};
};

export default connect(mapStateToProps, {fetchStreams}) (StreamIndex);
