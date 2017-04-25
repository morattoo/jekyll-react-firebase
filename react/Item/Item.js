import React, { Component } from 'react';

class Item extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { adresse, disponible, options, prix, type, name} = this.props.apto;
    const srcImg = "img/aptos/" + name + ".jpg";
    const displayType = type.split(",");


    return(<li className="listAptos__item">
      <div className="listAptos__wrapper">
        <img src={srcImg} alt="" className="listAptos__img"/>
        <div className="listAptos__info">
          <span className="listAptos__type">{displayType[0]}<sup>{displayType[1]}</sup></span>
          <span className="listAptos__prix">{prix}$ <span>(par mois)</span></span>
        </div>
        <p className="listAptos__adress">{adresse}</p>
      </div>
    </li>);
  }
}

export default Item;
