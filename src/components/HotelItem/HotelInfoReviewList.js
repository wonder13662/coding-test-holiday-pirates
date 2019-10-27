import React from "react";
import HotelInfoReview from "./HotelInfoReview";

class HotelInfoReviewList extends React.Component {
  render() {
    const { reviews } = this.props;
    const listReviews = reviews.map(review => (
      <HotelInfoReview key={review.name} review={review} />
    ));

    return (
      <>
        {reviews.length === 0 ? <div>No reviews</div> : <ul>{listReviews}</ul>}
      </>
    );
  }
}

export default HotelInfoReviewList;
