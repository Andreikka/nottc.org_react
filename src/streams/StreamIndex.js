import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../actions';
import Slider from "react-slick";
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
            
                  <div className="top-menu" tabIndex="1">
	<div className="container">
		<div className="row">
			<div className="col-md-6 text-left">
				<a href="https://www.nottc.org/index.php"><img src="images/nottc-logo-noshadow.png" className="img-fluid" alt=""/></a><br />
			</div>
			<div className="col-md-6 text-right">
				<a id="hamburger-icon" href="/" title="Menu">
				  <span className="line line-1"></span>
				  <span className="line line-2"></span>
				  <span className="line line-3"></span>
				</a>
			</div>
		</div>
		<div className="row menu-links"> 
			<div className="col-md-12 text-right">
					<a href="https://www.nottc.org/index.php" className="active">Home</a>
					<a href="https://www.nottc.org/ott_rights.php" className="">Ott rights</a>
					<a href="https://www.nottc.org/use_cases.php" className="">Use cases</a>
					<a href="https://www.nottc.org/partners.php" className="">Partners</a>
					<a href="https://www.nottc.org/contact_us.php" className="">Contact us</a>
			</div>
		</div>
	</div>
</div>

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