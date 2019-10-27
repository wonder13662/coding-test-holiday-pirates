import React from "react";

const FALLBACK_IMG_URL = "fallback-image.png"; // TODO Constant variable

class HotelImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrorOccurred: false,
      hasImgLoaded: false,
      imageUrl: props.images.shift()
    };

    this.imgRef = React.createRef();

    this.handleOnLoaded = this.handleOnLoaded.bind(this);
    this.handleOnError = this.handleOnError.bind(this);
  }

  handleOnError() {
    const { images } = this.props;
    if (images.length > 0) {
      this.setState({ imageUrl: images.shift() });
    } else {
      this.setState({ hasErrorOccurred: true });
    }
  }

  handleOnLoaded() {
    const { images } = this.props;
    if (this.imgRef.current.clientHeight < 100) {
      if (images.length > 0) {
        this.setState({ imageUrl: images.shift() });
      } else {
        this.setState({ hasImgLoaded: true, hasErrorOccurred: true });
      }
    }
  }

  render() {
    const { alt } = this.props;
    const { hasErrorOccurred, imageUrl } = this.state;

    let img = null;
    if (hasErrorOccurred) {
      img = <img alt={alt} src={FALLBACK_IMG_URL} />;
    } else {
      img = (
        <img
          alt={alt}
          src={imageUrl}
          ref={this.imgRef}
          onError={this.handleOnError}
          onLoad={this.handleOnLoaded}
        />
      );
    }

    return img;
  }
}

export default HotelImage;
