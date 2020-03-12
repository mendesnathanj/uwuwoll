import React from 'react';


class Video extends React.Component {
  constructor(props) {
    super(props);

    this.video = null;
  }

  componentDidMount() {
    this.video = document.querySelector('#episode-video');
  }

  componentDidUpdate(prevProps) {
    const { src } = this.props;

    if (prevProps && prevProps.src !== src)
      this.video.src = src;
  }


  render() {
    const { src } = this.props;

    return (
      <video id="episode-video" className="episode-video" autoPlay="autoplay" controls>
        <source src={ src } />
      </video>
    );
  }
}


export default Video;
