import React from "react";
import HotelItem from "../HotelItem";

// TODO Receive the HotelItemList via Context

class HotelItemList extends React.Component {
  render() {
    return (
      <div>
        <h3>HotelItemList</h3>
        <HotelItem />
        <HotelItem />
      </div>
    );
  }
}

export default HotelItemList;
