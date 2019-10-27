import React from "react";
import HotelImage from "./HotelImage";
import HotelInfo from "./HotelInfo";
import HotelInfoReviewList from "./HotelInfoReviewList";
import fakeApi from "../../api/holiday-pirates-fake-api";
import { Button } from "semantic-ui-react";
import "../../css/hotel-item.css";

const CLASSNAME_REVIEW_OPENED = "review-opened";
const CLASSNAME_REVIEW_CLOSED = "review-closed";

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
        this.setState({
          isOpeningReview: true,
          reviews: response.data,
          isToggleDisabled: false
        });
      })
      .catch(error => {
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

    // 1. Create Show reviews Button (Render prop)
    const toggleReviewBtn = isToggleDisabled ? (
      <Button color="blue" onClick={this.toggleReview} disabled>
        Show reviews
      </Button>
    ) : (
      <Button color="blue" onClick={this.toggleReview}>
        {isOpeningReview ? "Close reviews" : "Show reviews"}
      </Button>
    );

    const classNameReview = isOpeningReview
      ? CLASSNAME_REVIEW_OPENED
      : CLASSNAME_REVIEW_CLOSED;

    return (
      <li className="hotel-item">
        <div className="hotel-item--overview">
          <div className={`hotel-item--overview-image ${classNameReview}`}>
            <HotelImage alt={name} images={images} />
          </div>
          <div className={`hotel-item--overview-info ${classNameReview}`}>
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
