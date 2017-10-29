import React, { Component } from 'react';

class ServiceItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let classNameIcon = "";
    let displayName = "";

    switch (this.props.name) {
      case "chauffe":
        classNameIcon="fa fa-thermometer-three-quarters";
        displayName = this.props.active ? "Chauffé" : "Non chauffé";
        break;
      case "eau-chaude":
        classNameIcon="fa fa-bath";
        displayName = this.props.active ? "Eau chaude" : "Non eau chaude";
        break;
      case "eclaire":
        classNameIcon="fa fa-lightbulb-o";
        displayName = this.props.active ? "Éclairé" : "Non éclairé";
        break;
      case "semi-meuble":
        classNameIcon="fa fa-bed";
        displayName = this.props.active ? "Semi-meublé" : "Non semi-meublé";
        break;
      case "wifi":
        classNameIcon="fa fa-wifi";
        displayName = this.props.active ? "Wi-Fi" : "Non wi-fi";
        break;
      default:
    }

    const classNameItem = this.props.active ? "listAptos__serviceItem" : "listAptos__serviceItem inactive";

    return(<li className={classNameItem} data-tooltip={displayName}>
              <i className={classNameIcon} aria-hidden="true"></i>
            </li>);
  }
}

export default ServiceItem;
