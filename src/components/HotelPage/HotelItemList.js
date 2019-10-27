import React from "react";
import HotelItem from "../HotelItem";

// TODO Receive the HotelItemList via Context

class HotelItemList extends React.Component {
  render() {
    const { hotelItemList } = this.props;
    const listItems = hotelItemList.map(hotelItem => (
      <HotelItem key={hotelItem.id} hotelItem={hotelItem} />
    ));
    return (
      <div>
        <h3>HotelItemList:{hotelItemList.length}</h3>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default HotelItemList;
