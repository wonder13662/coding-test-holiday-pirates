import React from "react";
import HotelInfoHeader from "./HotelInfoHeader";
import HotelInfoBody from "./HotelInfoBody";

class HotelInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>HotelInfo</h3>
        <HotelInfoHeader />
        <HotelInfoBody />
      </div>
    );
  }
}

export default HotelInfo;
