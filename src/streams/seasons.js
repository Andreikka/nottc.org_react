import React from "react";
import Slider from "react-slick";
class Seasons extends React.Component {

constructor() {
    super();
    this.state = {
      series: [],
      isLoaded: false,
      selectedSeason: 0
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/streams')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            series: json,
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

      var {isLoaded, series} = this.state;
      if(!isLoaded) {
        return <div>Loading....</div>
      }else {       
          return (
              <div>
                
                      {series.map(serie => ( 
                        <div key={serie.id} className="slides">
                          {serie.seasons && serie.seasons.map((season, index) => (
                            index === this.state.selectedSeason &&
                            <div key={season.name} style={{color: '#000'}}>
                            <Slider {...settings}>
                              {season.episodes && season.episodes.map(episode => (

                                <div key={episode.id} className="slides">
          <a className="episode-link" href="/">
                          <img className="img-responsive" src={episode.image_thumb} alt="" />
                          <h2 className="episode-title">{episode.title}</h2>
                        </a>
                        </div>
                              ))} </Slider>
                            </div>
                          ))}
                          
                        </div>
                      ))}
                      
              </div>
          
          )
      }
  }


}



export default Seasons;