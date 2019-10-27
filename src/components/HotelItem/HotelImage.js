import React from "react";
import { Image } from "semantic-ui-react";

const FALLBACK_IMG_URL = "fallback-image.png"; // TODO Constant variable

class HotelImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrorOccurred: false,
      hasImgLoaded: false
    };

    this.imgRef = React.createRef();

    this.handleOnLoaded = this.handleOnLoaded.bind(this);
    this.handleOnError = this.handleOnError.bind(this);
  }

  handleOnError() {
    this.setState({ hasErrorOccurred: true });
  }

  handleOnLoaded() {
    if (this.imgRef.current.clientHeight < 100) {
      this.setState({ hasImgLoaded: true, hasErrorOccurred: true });
    }
  }

  render() {
    const { alt, imageUrl } = this.props;
    const { hasErrorOccurred } = this.state;

    let img = null;
    if (hasErrorOccurred) {
      img = (
        <div ref={this.imgRef}>
          <Image alt={alt} src={FALLBACK_IMG_URL} size="small" rounded />
        </div>
      );
    } else {
      img = (
        <div ref={this.imgRef}>
          <Image
            alt={alt}
            src={imageUrl}
            size="small"
            onError={this.handleOnError}
            onLoad={this.handleOnLoaded}
            rounded
          />
        </div>
      );
    }

    return img;
  }
}

export default HotelImage;
