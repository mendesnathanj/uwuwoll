import React from 'react';


class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    
  }


  render() {
    const { src } = this.props;

    return (
      <video className="episode-video" autoPlay="autoplay" controls>
        <source src={ src } />
      </video>
    );
  }
}


export default Video;
