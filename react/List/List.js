import React, { Component } from 'react';
import Item from '../Item/item';
import Overlay from '../OverlayDescription/Overlay';

import * as Firebase from 'firebase';
import FilterSection from '../FilterOptions/FilterOptions'

const config = {
  apiKey: "AIzaSyBzKbxj-T2dlOPvWOBfEu39j7XA0KhO7wA",
  authDomain: "gestion-oceanne-inc.firebaseapp.com",
  databaseURL: "https://gestion-oceanne-inc.firebaseio.com",
  projectId: "gestion-oceanne-inc",
  storageBucket: "gestion-oceanne-inc.appspot.com",
  messagingSenderId: "269281510493"
};

const FirebaseReady= Firebase.initializeApp(config);

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aptos: [],
      filtersActive: {
        type: 'Tous',
        zone: 'Tous',
        search: ''
      },
      overlay: false,
      showApto: ""
    }

    this.changeFiltersActive = this.changeFiltersActive.bind(this);
    this.generatorList = this.generatorList.bind(this);
    this.activeOverlay = this.activeOverlay.bind(this);
    this.removeOverlay = this.removeOverlay.bind(this);
  }

  changeFiltersActive(filtersActived) {
    this.setState({
      filtersActive: filtersActived
    });
  }

  filterSearch(el, val) {
    const validation= []

    for (var key in el) {
      if (el.hasOwnProperty(key) && typeof(el[key]) == 'string') {
        let result = el[key].indexOf(val) > -1;
        validation.push(result);
      }
    }

    return validation.some(x => x == true);
  }


  generatorList() {

    const aptosFilter = this.state.aptos.filter(function (el) {
      return (el.type === this.state.filtersActive.type || this.state.filtersActive.type == "Tous")  &&
             (el.zone === this.state.filtersActive.zone || this.state.filtersActive.zone == "Tous") &&
             (this.filterSearch(el, this.state.filtersActive.search)|| this.state.filtersActive.search == "")
    }.bind(this));

    const listAptos = aptosFilter.map(function(apto, index) {
      return(<Item key={index} apto={apto} actionOverlay={this.activeOverlay}/>);
    }.bind(this));

    return (<ul className="listAptos__container">{listAptos}</ul>);
  }

  componentWillMount() {

    let newList = [];
    const aptosRef = FirebaseReady.database().ref("aptos");
    aptosRef.once('value').then(function(snapshot) {

      snapshot.forEach(function(data) {
        if (data.val().disponible) {
          newList.push(data.val());
        }
      });

      this.setState({aptos: newList});

    }.bind(this));

  }

  activeOverlay(apto) {
    this.setState({
      overlay: true,
      showApto: apto
    });
  }

  removeOverlay() {
    this.setState({
      overlay: false,
      showApto: ""
    });
  }

  getOverlay() {
    return(
      <Overlay key={"overlay"} closeOverlay={this.removeOverlay}>

      </Overlay>
    )
  }

  render() {

    var aptos = this.generatorList();
    var overlay = this.state.overlay ? this.getOverlay() : null;

    return(
      <section className="listAptos__section">
        {overlay}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">Nos immeubles disponibles</h2>
                <hr className="primary"/>
            </div>
            <div className="col-lg-12">
              <FilterSection  actionUpdate={this.changeFiltersActive}/>
            </div>
            <div className="col-lg-12 listAptos">
              {aptos}
            </div>
          </div>
        </div>
      </section>

    );
  }

}


export default List;
