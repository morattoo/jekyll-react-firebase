import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Map from '../Map';

class Overlay extends Component {

  constructor(props) {
    super(props);

    this.OutSideHandleClick = this.OutSideHandleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  OutSideHandleClick(ev) {
    if (ev.target.className == "overlay") {
      this.props.closeOverlay();
    }
  }

  handleButtonClick() {
    this.props.closeOverlay();
  }

  mapingGallery () {
    var mapImg = [];

    for (var i = 0; i < 8; i++) {
      let path = "img/aptos/default/"+ (i+1) +".jpg";
      let pathThumbnail = "img/aptos/default/thumbnail/"+ (i+1) +".jpg";

      mapImg.push({original: path , thumbnail: pathThumbnail});
    }

    return mapImg;
  }

  render() {

    const galleryImages =  this.mapingGallery();
    const { adresse, disponible, options, prix, type, name, date, zone, description, location} = this.props.showApto;


    return(<div className="overlay" onClick={this.OutSideHandleClick}>
          <button className="wrapperCenter__close" onClick={this.handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M28.94 31.786L.614 60.114c-.787.787-.787 2.062 0 2.85.393.393.91.59 1.424.59.516 0 1.03-.197 1.424-.59l28.54-28.544 28.54 28.54c.396.395.91.59 1.426.59s1.03-.195 1.424-.59c.788-.786.788-2.06 0-2.848L35.065 31.786 63.41 3.438c.787-.787.787-2.062 0-2.85-.787-.785-2.062-.785-2.848 0L32.002 29.15 3.442.59C2.653-.196 1.38-.196.59.59c-.786.787-.786 2.062 0 2.85l28.35 28.346z"/>
            </svg>
          </button>
          <div className="wrapperCenter">
            <div className="showApto__adresse">{adresse}</div>
            <div className="showApto__description" dangerouslySetInnerHTML={{__html: description}}></div>
            <div className="wrapperRow">
              <div className="showApto__prix">{type}  {prix}$ <span>(par mois)</span></div>
              <div className="gallery">
                <ImageGallery items={galleryImages} slideInterval={2000}/>
              </div>
              <Map location={location}/>
            </div>
          </div>
    </div>);
  }
}

export default Overlay;
