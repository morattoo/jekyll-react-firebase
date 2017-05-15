import React, { Component } from 'react';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.changeOption = this.changeOption.bind(this);

    this.state = {
      type: 'Tous',
      zone: 'Tous'
    }
  }

  changeOption(e) {
    const val = e.target.value;
    const type = e.target.id;
    let allFilter = Object.assign({}, this.state);

    switch (type) {
      case 'type':
        allFilter.type = val;
        break;
      case 'zone':
        allFilter.zone = val;
        break;
      default:
    }

    this.props.actionUpdate(allFilter);

    this.setState ({
      type: allFilter.type,
      zone: allFilter.zone
    });
  }

  render() {

    const options = {
      typeOptions: ['Tous', '1,1/2', '2,1/2', '3,1/2', '4,1/2', '5,1/2'],
      zoneOptions: ['Tous', 'limoilou', 'saint-foy'],
    }

    return(
      <div className="filters">
        <div className="filter-options">
          <div className="filter-option">
            <label>Grandeur</label>
            <select id="type" value={this.state.type} onChange={this.changeOption}>
            {options.typeOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
            <label>Zone</label>
            <select id="zone" value={this.state.zone} onChange={this.changeOption}>
            {options.zoneOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
