import React from "react";
import HotelInfoReview from "./HotelInfoReview";

class HotelInfoReviewList extends React.Component {
  render() {
    const { reviews } = this.props;
    const listReviews = reviews.map(review => (
      <HotelInfoReview key={review.name} review={review} />
    ));

    return <ul>{listReviews}</ul>;
  }
}

export default HotelInfoReviewList;
