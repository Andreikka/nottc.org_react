import React from "react";
import { connect } from 'react-redux';
import { fetchStream } from '../actions';

class StreamShow extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div className="loader"></div>
    }
    return <div>
      <div className="fluid-container">
      <div className="container ps11">
      <div className="col box-top" style={{backgroundImage: 'images/thebigbangtheory.png'}}>
        <div className="bg_dark"></div>


                <div className="col box-details home-details">
                  <img src={this.props.stream.network_img} alt=""/>
                    <h2 class="stream_title bold"> {this.props.stream.title}</h2>
                    <div class="subtitle">
                      <p>{this.props.stream.show_slogan}</p>
                      <p>{this.props.stream.show_date}</p>
                    </div>
                    <div className="row">
                    <div className="col">
                      <div className="subtitle defaultsub uppercase bold">
                     Trending NOW
                    </div>
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