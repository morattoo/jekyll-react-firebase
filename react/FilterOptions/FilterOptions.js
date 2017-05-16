import React, { Component } from 'react';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.changeOption = this.changeOption.bind(this);

    this.state = {
      type: 'Tous',
      zone: 'Tous',
      search: ''
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
      case 'search':
        allFilter.search = val;
        break;
      default:
    }

    this.props.actionUpdate(allFilter);

    this.setState ({
      type: allFilter.type,
      zone: allFilter.zone,
      search: allFilter.search
    });
  }

  render() {

    const options = {
      typeOptions: ['Tous', '1,1/2', '2,1/2', '3,1/2', '4,1/2', '5,1/2'],
      zoneOptions: ['Tous', 'limoilou', 'saint-foy'],
    }

    return(
      <div className="filters">
        <div className="filters__list">
          <div className="filters__item">
            <label>Grandeur</label>
            <select id="type" value={this.state.type} onChange={this.changeOption}>
            {options.typeOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
          </div>
          <div className="filters__item">
            <label>Zone</label>
            <select id="zone" value={this.state.zone} onChange={this.changeOption}>
            {options.zoneOptions.map(function(option) {
              return ( <option key={option} value={option}>{option}</option> )
            })}
            </select>
          </div>
          <div className="filters__item">
            <label>Search</label>
            <input id="search" name="search" value={this.state.search} onChange={this.changeOption}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
