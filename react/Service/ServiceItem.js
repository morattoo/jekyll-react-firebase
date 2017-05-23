import React, { Component } from 'react';

class ServiceItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let className = "";
    switch (this.props.service) {
      case "chauffe":
        className="fa fa-thermometer-three-quarters";
        break;
      case "eau-chaude":
        className="fa fa-bath";
        break;
      case "eclaire":
        className="fa fa-lightbulb-o";
        break;
      case "semi-meuble":
        className="fa fa-bed";
        break;
      default:
    }
    return(<li className="listAptos__serviceItem" data-tooltip={this.props.service}><i className={className} aria-hidden="true"></i></li>);
  }
}

export default ServiceItem;
