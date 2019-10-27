import React from "react";
import HotelImage from "./HotelImage";
import HotelInfo from "./HotelInfo";
import HotelInfoReviewList from "./HotelInfoReviewList";
import fakeApi from "../../api/holiday-pirates-fake-api";
import "../../css/hotel-item.css";

class HotelItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpeningReview: false,
      isToggleDisabled: false,
      reviews: []
    };

    this.toggleReview = this.toggleReview.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  toggleReview() {
    const { isOpeningReview } = this.state;

    if (!isOpeningReview) {
      this.fetchReviews();
    } else {
      this.setState({ isOpeningReview: false });
    }
  }

  fetchReviews() {
    this.setState({ isToggleDisabled: true });
    fakeApi
      .fetchReviews(this.props.hotelItem.id)
      .then(response => {
        console.log("response:", response);
        this.setState({
          isOpeningReview: true,
          reviews: response.data,
          isToggleDisabled: false
        });
      })
      .catch(error => {
        console.log("error:", error.response.data.error); // Something failed!
        this.setState({
          isOpeningReview: false,
          reviews: [],
          isToggleDisabled: false
        });
      });
  }

  render() {
    const { hotelItem } = this.props;
    const { isToggleDisabled, isOpeningReview, reviews } = this.state;
    const { images, name } = hotelItem;
    const imageUrl = images[0];

    // 1. Create Show Review Button (Render prop)
    const toggleReviewBtn = isToggleDisabled ? (
      <button onClick={this.toggleReview} disabled>
        Show Review
      </button>
    ) : (
      <button onClick={this.toggleReview}>
        {isOpeningReview ? "Close Review" : "Show Review"}
      </button>
    );

    // 2. Create Review list (Render prop)

    return (
      <li className="hotel-item">
        <div className="hotel-item--overview">
          <div
            className={`hotel-item--overview-image ${
              isOpeningReview ? "review-opened" : "review-closed"
            }`}
          >
            <HotelImage alt={name} imageUrl={imageUrl} />
          </div>
          <div
            className={`hotel-item--overview-info ${
              isOpeningReview ? "review-opened" : "review-closed"
            }`}
          >
            <HotelInfo
              hotelItem={hotelItem}
              toggleReviewBtn={toggleReviewBtn}
            />
          </div>
        </div>
        {isOpeningReview ? (
          <div className="hotel-item--reviews">
            <HotelInfoReviewList reviews={reviews} />
          </div>
        ) : null}
      </li>
    );
  }
}

export default HotelItem;
