import React, { Component } from 'react';
import Item from '../Item/item';

import * as Firebase from 'firebase';
import FilterSection from '../FilterOptions/FilterOptions'

const config = {
  apiKey: "AIzaSyBvqwkRgxV7VxsoiANdv1KX7RO3zMAYTD0",
  authDomain: "developgestion.firebaseapp.com",
  databaseURL: "https://developgestion.firebaseio.com",
  projectId: "developgestion",
  storageBucket: "developgestion.appspot.com",
  messagingSenderId: "1013072931380"
};

const FirebaseReady= Firebase.initializeApp(config);

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aptos: [],
      filtersActive: {
        type: 'Tous',
        zone: 'Tous'
      }
    }

    this.changeFiltersActive = this.changeFiltersActive.bind(this);
    this.generatorList = this.generatorList.bind(this);
  }

  changeFiltersActive(filtersActived) {
    this.setState({
      filtersActive: filtersActived
    });
  }

  generatorList() {

    const aptosFilter = this.state.aptos.filter(function (el) {
      return (el.type === this.state.filtersActive.type || this.state.filtersActive.type == "Tous")  &&
             (el.zone === this.state.filtersActive.zone || this.state.filtersActive.zone == "Tous");
    }.bind(this));

    const listAptos = aptosFilter.map(function(apto, index) {
      return(<Item key={index} apto={apto} />);
    });

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

  render() {

    var aptos = this.generatorList();

    return(
      <section className="listAptos__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">Nos immeubles disponible</h2>
                <hr className="primary"/>
            </div>
            <FilterSection  actionUpdate={this.changeFiltersActive}/>
            <div className="col-lg-12">

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
