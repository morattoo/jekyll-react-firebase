import React, { Component } from 'react';
import moment from 'moment';
import ServiceItem from '../Service/ServiceItem';

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

  getService(){

  }

  getListServices(services) {

    const listServices = [];

    for (var prop in services) {
      if (services.hasOwnProperty(prop)) {
        console.log(services[prop]);
        if(services[prop]) {
          listServices.push(<ServiceItem key={prop} service={prop}/>);
        }
      }
    }
    return (<ul className="listAptos__services">{listServices}</ul>);
  }

  render() {
    const { adresse, disponible, options, prix, type, name, date} = this.props.apto;
    const srcImg = "img/aptos/" + name + ".jpg";
    const displayType = type.split(",");
    const dateDisplayFormat = this.getDateDisplay(date);
    const listServices = this.getListServices(options);

    return(<li className="listAptos__item">
      <div className="listAptos__wrapper">
        <img src={srcImg} alt="" className="listAptos__img"/>
        <div className="listAptos__info">
          <span className="listAptos__type">{displayType[0]}<sup>{displayType[1]}</sup></span>
          <span className="listAptos__prix">{prix}$ <span>(par mois)</span></span>
        </div>
        <p className="listAptos__adress">{adresse}</p>
        <p className="listAptos__adress">Disponible, {dateDisplayFormat}</p>
        {listServices}
      </div>
    </li>);
  }
}

export default Item;
