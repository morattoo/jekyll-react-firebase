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
    super(props)
    this.state = {
      aptos: []
    }
  }

  componentWillMount() {

    let newList = [];
    const aptosRef = FirebaseReady.database().ref("aptos");
    aptosRef.once('value').then(function(snapshot) {

      snapshot.forEach(function(data) {
        newList.push(data.val());
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
