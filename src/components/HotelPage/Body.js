import React from "react";
import ErrorBox from "./ErrorBox";
import HotelItemList from "./HotelItemList";

class HotelPageBody extends React.Component {
  render() {
    return (
      <div>
        <h3>HotelPageBody</h3>
        <ErrorBox />
        <HotelItemList />
      </div>
    );
  }
}

export default HotelPageBody;
