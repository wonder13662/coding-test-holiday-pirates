import React from "react";
import HotelInfoDetail from "./HotelInfoDetail";
import HotelInfoReviewList from "./HotelInfoReviewList";

class HotelInfoBody extends React.Component {
  render() {
    return (
      <div>
        <HotelInfoDetail />
        <HotelInfoReviewList />
      </div>
    );
  }
}

export default HotelInfoBody;
