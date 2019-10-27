import React from "react";

class HotelImage extends React.Component {
  // TODO Fallback image, Loading prgress image
  render() {
    const { alt, imageUrl } = this.props;
    return <img alt={alt} src={imageUrl}></img>;
  }
}

export default HotelImage;
