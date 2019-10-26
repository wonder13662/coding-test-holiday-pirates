import React from "react";
import HotelImage from "./HotelImage";
import HotelInfo from "./HotelInfo";

class HotelItem extends React.Component {
  render() {
    return (
      <div>
        <HotelImage />
        <HotelInfo />
      </div>
    );
  }
}

export default HotelItem;
