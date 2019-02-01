import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';

class PopularSeries extends React.Component {

    constructor() {
        super();
        this.state = {
            popular_series: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/popular_series')
            .then(res => res.json())
            .then(json => {
                this.setState({isLoaded: true, popular_series: json, seasons: json})
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
                        infinite: false,
                        dots: false
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        var {
            isLoaded,
            popular_series
        } = this.state;
        if (!isLoaded) {
            return <div>Loading....</div>
        } else {
            return (
                <div>
                    <Slider {...settings}>
                        {
                            popular_series.map(item => (
                                <div key={item.id} className="slides">
                                    <Link className="episode-link" to={`/streams/show/${item.id}`}>
                                        <img className="img-fluid" src={item.image_thumb} alt=""/>
                                        <h2 className="episode-title">{item.title}</h2>
                                    </Link>
                                </div>
                            ))
                        }

                    </Slider>
                </div>
            )
        }

    }

}

export default PopularSeries;