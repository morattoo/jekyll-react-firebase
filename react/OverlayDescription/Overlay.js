import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

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

    return(<div className="overlay" onClick={this.OutSideHandleClick}>
          <div className="wrapperCenter">
            <button className="wrapperCenter__close" onClick={this.handleButtonClick}>x</button>
            <div className="gallery">
              <ImageGallery items={galleryImages} slideInterval={2000}/>
            </div>
          </div>
    </div>);
  }
}

export default Overlay;
