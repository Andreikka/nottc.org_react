import React from "react";
import Slider from "react-slick"; 

class PopularSeries extends React.Component {

constructor() {
    super();
    this.state = {
      popular_series: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/popular_series')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            popular_series: json,
            seasons: json
        })
    });
  }

  render() {

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

      var {isLoaded, popular_series} = this.state;
      if(!isLoaded) {
        return <div>Loading....</div>
      }else {
          return (
              <div>
                  <Slider {...settings}>
                      {popular_series.map(item => ( 
                        <div key={item.id} className="slides">
          <a className="episode-link" href="/">
                          <img className="img-responsive" src={item.image_thumb} alt="" />
                          <h2 className="episode-title" style={{position: 'relative'}}>{item.title}</h2>
                        </a>
          </div>
                      ))}
                      
                      
                 </Slider>
              </div>
          )
      }
     
  }


}



export default PopularSeries;