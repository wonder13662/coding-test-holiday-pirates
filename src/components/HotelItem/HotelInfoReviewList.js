import React from "react";
import HotelInfoReview from "./HotelInfoReview";

class HotelInfoReviewList extends React.Component {
  render() {
    return (
      <div>
        <h5>HotelInfoReviewList</h5>
        <HotelInfoReview />
        <HotelInfoReview />
      </div>
    );
  }
}

export default HotelInfoReviewList;
