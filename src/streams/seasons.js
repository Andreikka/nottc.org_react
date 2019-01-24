import React from "react";
import Slider from "react-slick"; 

class Seasons extends React.Component {

constructor() {
    super();
    this.state = {
      popular_series: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/streams/1')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            seasons: json,
            seasonone: json
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

      var {isLoaded, seasons} = this.state;
      if(!isLoaded) {
        return <div>Loading....</div>
      }else {
          return (
              <div>
                 
                      {seasons.map(item => ( 
                        <div key={item.id} className="slides">
        
                          <h2 className="episode-title" style={{position: 'relative'}}>{item.title}</h2>
          </div>
                      ))}
                      
                      
              </div>
          )
      }
     
  }


}



export default Seasons;