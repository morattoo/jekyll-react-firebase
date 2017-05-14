import React, { Component } from 'react';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.changeOption = this.changeOption.bind(this);
  }

  changeOption (e) {
    const val = e.target.value;
    const type = e.target.id;

    this.props.actionUpdate(val, type);
  }

  render() {

    const options = {
      typeOptions: ['1,1/2', '2,1/2', '3,1/2', '4,1/2', '5,1/2'],
      zoneOptions: ['limoilou', 'saint-foy'],
    }

    return(
      <div className="filters">
        <div className="filter-options">
        <div className="filter-option">
          <label>Grandeur</label>
          <select id="size" value={''} onChange={this.changeOption}>
          {options.typeOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>Zone</label>
          <select id="zone" value={''} onChange={this.changeOption}>
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
