import React from "react";
import HotelInfoDetail from "./HotelInfoDetail";
import HotelInfoReviewList from "./HotelInfoReviewList";
import fakeApi from "../../api/holiday-pirates-fake-api";
import { review_list } from "../../mockup/hotel-review-list";

class HotelInfoBody extends React.Component {
  // TODO When should it fetch review list?
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      hasToggleReview: false
    };

    this.toggleReview = this.toggleReview.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
    this.fetchMockReviews = this.fetchMockReviews.bind(this);
  }

  toggleReview() {
    const { hasToggleReview, reviews } = this.state;

    if (hasToggleReview && reviews.length === 0) {
      this.fetchMockReviews();
      // this.fetchReviews();
    }

    this.setState({ hasToggleReview: !hasToggleReview });
  }

  fetchReviews() {
    fakeApi
      .fetchReviews(this.props.hotelItem.id)
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        console.log("error:", error.response.data.error); // Something failed!
      });
  }

  fetchMockReviews() {
    console.log("fetchMockReviews");
    this.setState({ reviews: review_list });
  }

  render() {
    const { description, price, date_end, date_start } = this.props.hotelItem;
    // TODO Change time format(German)

    const { hasToggleReview, reviews } = this.state;

    return (
      <div>
        <HotelInfoDetail
          description={description}
          price={price}
          dateEnd={date_end}
          dateStart={date_start}
          toggleReview={this.toggleReview}
        />
        {hasToggleReview && reviews.length > 0 ? (
          <HotelInfoReviewList reviews={reviews} />
        ) : null}
      </div>
    );
  }
}

export default HotelInfoBody;
