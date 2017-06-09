import React, { Component } from 'react';

class Overlay extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.closeOverlay();
  }

  render() {
    return(<div className="overlay" onClick={this.handleClick}>
          <div className="wrapperCenter"></div>
    </div>);
  }
}

export default Overlay;
