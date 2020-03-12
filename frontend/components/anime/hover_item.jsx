import React from 'react';

class HoverItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hoverLeft: false };
  }

  componentDidMount() {
    this.setState({ hoverLeft: this.getPosition() });
  }

  getPosition() {
    let screenWidth = window.innerWidth;
    let hoverItem = document.querySelector(`#hover-${this.props.elementId}`);
    let bounds = hoverItem.getBoundingClientRect();

    return bounds.right + hoverItem.offsetWidth > screenWidth;
  }

  render() {
    let hoverPosClass = this.state.hoverLeft ? "hover-item-left" : "hover-item-right";
    let description = this.props.description ? this.props.description.slice(0, 315) + "..." : "";

    return (
      <div
        id={`hover-${this.props.elementId}`}
        className={`hover-item ${hoverPosClass}`}
      >
        <h3 className="hover-title">{this.props.title}</h3>
        <p className="hover-description">{description}</p>
      </div>
    );
  }
};



export default HoverItem;
