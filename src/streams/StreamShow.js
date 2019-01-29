import React from "react";
import { connect } from 'react-redux';
import { fetchStream } from '../actions';
import NavMenu from '../streams/nav';
import PopularSeries from '../streams/page';
import Seasons from '../streams/seasons';
import Dropdown from "./dropdown";

class StreamShow extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  

  render() {
    var col_settings = {
      paddingTop:'380px',
      position: 'relative'
    }
    if (!this.props.stream) {
      return <div className="loader">
        
      </div>
      
    }
    return <div>
      <div className="container-fluid">
  <div className="row">
  

    <div className="col box-top" style={{backgroundPosition:'center top', backgroundSize:'cover',backgroundImage : 'linear-gradient(to top, rgba(1,22,39,1), rgba(1, 22, 39,0.3) 50%, rgba(1, 22, 39,.2)), url(' + this.props.stream.image_poster + ')' , backgroundRepeat: 'no-repeat', backgroundColor: '#011627'}}>
    <div className="container">
        <NavMenu />
<div className="box-details home-details" style={col_settings} >
                    <img src={this.props.stream.network_img} alt=""/>
                      <h2 className="stream_title bold"> {this.props.stream.title}</h2>
                      <div className="subtitle">
                        <p>{this.props.stream.show_slogan}</p>
                        <p>{this.props.stream.show_date}</p>
                      </div>
</div>

                <a href="/" className="btn btn-custom-green ">DVR This NOW</a>
                  
                <div className="episodesshow select-season" style={{position:'relative'}}>

               <div className="dropdown">
               <Dropdown />
               </div> 
               
               <Seasons />
               
               </div>
             
            
          
    </div>
    </div>

    
    </div>   
        
    </div>
    <div className="container-fluid" style={{backgroundColor: '#011627',paddingBottom:'30px'}}>
                <div className="container">
                
                     <div className="clips-extras" style={{position: 'relative'}}>
                                 <div class="uppercase bold about-text custom-title">
                                   Clips &amp; Extras
                                 </div>
                         <div className="Sliderr">      
                         <PopularSeries />
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
                TV-14 | 12 SEASONS | {this.props.stream.genre}
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
              <PopularSeries />
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