import React from "react";
import HotelDetail from "./HotelDetail";
import HotelInfoReviewList from "./HotelInfoReviewList";

class HotelInfoBody extends React.Component {
  render() {
    return (
      <div>
        <HotelDetail />
        <HotelInfoReviewList />
      </div>
    );
  }
}

export default HotelInfoBody;
