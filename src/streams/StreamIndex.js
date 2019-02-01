import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../actions';
import Slider from "react-slick";
import NavMenu from '../streams/nav';
class StreamIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
        };
    }

    componentDidMount() {
        this
            .props
            .fetchStreams();
        this.setState({nav1: this.slider1, nav2: this.slider2});
    }
    thumbList() {

        return this
            .props
            .streams
            .map(stream => {

                return (

                    <div key={stream.id}>
                             <img className="img-fluid" src={stream.image_thumb}  alt={stream.image_thumb}/>
                            {stream.id}
                    </div>
                );
            });
    }

    streamsList() {

        return this
            .props
            .streams
            .map(stream => {
                var slideBg = {
                    backgroundImage: 'linear-gradient(to top, rgba(1,22,39,1), rgba(1, 22, 39,0.3) 50%, rgba(1, 22, ' +
                            '39,.2)), url(' + stream.image_poster + ')',
                    backgroundColor: '#011627',
                    backgroundSize: 'cover',
                    width: '100%',
                    backgroundPosition: 'center top',
                    height: '100vh'
                };
                var slideOptions = {
                    paddingTop: '350px'
                };
                return (

                    <div key={stream.id}>

                        <div style={slideBg}>

                            <div className="container ps11" style={slideOptions}>

                                <div className="col box-details home-details">
                                    <img
                                        style={{
                                            width: '12%'
                                        }}
                                        src={stream.network_img}
                                        alt=""/>
                                    <h2 className="stream_title bold">
                                        {stream.title}</h2>
                                    <div className="subtitle">
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
                    </div>
                );
            });
    }

    render() {

            return (

                <div className="slide">

                    <NavMenu/>

                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        arrows={false}
                        infinite={false}
                        swipeToSlide={true}
                        slidesToScroll={1}>
                        {this.streamsList()}
                    </Slider>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="container">
                                <div
                                    style={{
                                        marginTop: '-150px'
                                    }}>
                                    <Slider
                                        asNavFor={this.state.nav1}
                                        ref={slider => (this.slider2 = slider)}
                                        slidesToShow={3}
                                        slidesToScroll={1}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                        
                                        infinite={false}
                                        arrows={true}>
                                        {this.thumbList()}

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            )
        }
    }


const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams)
    };
};

export default connect(mapStateToProps, {fetchStreams})(StreamIndex);
