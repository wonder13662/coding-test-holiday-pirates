import React from "react";
import HotelImage from "./HotelImage";
import HotelInfo from "./HotelInfo";

class HotelItem extends React.Component {
  render() {
    const { hotelItem } = this.props;
    const { images, name } = hotelItem;
    const imageUrl = images[0];
    return (
      <li>
        <HotelImage alt={name} imageUrl={imageUrl} />
        <HotelInfo hotelItem={hotelItem} />
      </li>
    );
  }
}

export default HotelItem;
