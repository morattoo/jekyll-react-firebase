import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class Overlay extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    if (ev.target.className == "overlay") {
      this.props.closeOverlay();
    }

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

    return(<div className="overlay" onClick={this.handleClick}>
          <div className="wrapperCenter">
            <div className="gallery">
              <ImageGallery items={galleryImages} slideInterval={2000}/>
            </div>
          </div>
    </div>);
  }
}

export default Overlay;
