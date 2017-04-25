import React, { Component } from 'react';

class Item extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { adresse, disponible, options, prix, type, name} = this.props.apto;
    const srcImg = "img/aptos/" + name + ".jpg";

    return(<li className="listAptos__item">
      <img src={srcImg} alt="" className="listAptos__img"/>
      <p className="listAptos__adress">{adresse}</p>
      <div className="listAptos__info"><span className="listAptos__prix">{prix}</span>{type}</div>
    </li>);
  }
}

export default Item;
