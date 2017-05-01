import React, { Component } from 'react';
import Item from '../Item/item';

import * as Firebase from 'firebase';

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
      filterOptions: {
        size: [],
        prix: []
      }
    }

    this.updateFiltersOptions = this.updateFiltersOptions.bind(this);
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

  generatorList() {
    const listAptos = this.state.aptos.map(function(apto, index) {
      return(<Item key={index} apto={apto} />);
    });

    return (<ul className="listAptos__container">{listAptos}</ul>);
  }

  updateFiltersOptions() {
    var size = this.state.aptos.map(function(item) { return item.type });
    var prix = this.state.aptos.map(function(item) { return item.prix });

    var sizeOptions = size.reduce(function(a,b) {
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
    },[]);

    var prixOptions = prix.reduce(function(a,b) {
      if (a.indexOf(b) < 0 ) a.push(b);
      return a;
    },[]);

    sizeOptions.unshift("");
    prixOptions.unshift("");
  }

  render() {
    var aptos = this.generatorList();
    this.updateFiltersOptions();

    return(
      <section className="listAptos__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">Nos immeubles disponible</h2>
                <hr className="primary"/>
            </div>
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
