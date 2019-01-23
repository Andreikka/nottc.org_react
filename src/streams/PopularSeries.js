import React, { Component } from 'react';
import {connect} from 'react-redux';
import { PopularSeries } from '../actions';
import Slider from "react-slick";
class PopularSerials extends Component {
    componentDidMount() {
        this.props.PopularSeries();
    }
  
    thumbsList() {
        
        return this.props.popular_series.map(popular_serial => {
             
            return (
                
                <div key={popular_serial.id}>
                       
           
          <a class="episode-link" href="/" tabindex="0">
                          <img class="img-responsive" src={popular_serial.image_thumb} alt="" />
                          <h2 class="episode-title" style={{position: 'relative'}}>{popular_serial.title}</h2>
                        </a>
                       
                </div>
            );
        });
    }

    render() {
        
        return (
            
          <div>
      <Slider>  {this.thumbsList()}</Slider>
</div>
        
        )
    }
 
}

const mapStateToProps = state => {
    return { popular_series: Object.values(state.popular_series)};
};

export default connect(mapStateToProps, {PopularSeries}) (PopularSerials);
