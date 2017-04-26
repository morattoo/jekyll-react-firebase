import React, { Component } from 'react';
import moment from 'moment';

class Item extends Component {

  constructor(props) {
    super(props)
  }

  getDateDisplay(date) {
    moment.locale('fr');

    let dateDisplay =  moment(date);

    if (dateDisplay.isAfter()) {
      dateDisplay = dateDisplay.format('LL');
    }else {
      dateDisplay = "immédiatement";
    }

    return dateDisplay;
  }

  render() {
    const { adresse, disponible, options, prix, type, name, date} = this.props.apto;
    const srcImg = "img/aptos/" + name + ".jpg";
    const displayType = type.split(",");
    const dateDisplayFormat = this.getDateDisplay(date);

    return(<li className="listAptos__item">
      <div className="listAptos__wrapper">
        <img src={srcImg} alt="" className="listAptos__img"/>
        <div className="listAptos__info">
          <span className="listAptos__type">{displayType[0]}<sup>{displayType[1]}</sup></span>
          <span className="listAptos__prix">{prix}$ <span>(par mois)</span></span>
        </div>
        <p className="listAptos__adress">{adresse}</p>
        <p className="listAptos__adress">Disponible, {dateDisplayFormat}</p>
        <ul>
          <li><i className="fa fa-thermometer-three-quarters" aria-hidden="true"></i></li>
          <li><i className="fa fa-lightbulb-o" aria-hidden="true"></i></li>
          <li><i className="fa fa-bath" aria-hidden="true"></i></li>
          <li><i className="fa fa-snowflake-o" aria-hidden="true"></i></li>
          <li><i className="fa fa-bed" aria-hidden="true"></i></li>
        </ul>
      </div>
    </li>);
  }
}

export default Item;
