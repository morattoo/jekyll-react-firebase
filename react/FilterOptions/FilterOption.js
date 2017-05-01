import React, { Component } from 'react';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.changeOption = this.changeOption.bind(this);
  }

  changeOption: function(type, e) {
    var val = e.target.value;
    this.props.changeOption(val, type);
  }

  render() {

    const option = {

    }

    return(
      <div className="filters">
        <div className="filter-options">
        <div className="filter-option">
          <label>Grandeur</label>
          <select id="size" value={this.props.bender} onChange={this.changeOption(this, 'size')}>
          {this.props.benderOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>Zone</label>
          <select id="zone" value={this.props.nation} onChange={this.changeOption(this, 'zone')}>
          {this.props.nationOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>Prix</label>
          <select id="prix" value={this.props.person} onChange={this.changeOption(this, 'prix')}>
          {this.props.personOptions.map(function(option) {
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
