import React from "react";
import HotelInfoDetail from "./HotelInfoDetail";
import HotelInfoReviewList from "./HotelInfoReviewList";
import fakeApi from "../../api/holiday-pirates-fake-api";

class HotelInfoBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      isOpeningReview: false,
      isToggleDisabled: false
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
    const { description, price, date_end, date_start } = this.props.hotelItem;
    // TODO Change time format(German)

    const { isOpeningReview, reviews, isToggleDisabled } = this.state;

    return (
      <div>
        <HotelInfoDetail
          description={description}
          price={price}
          dateEnd={date_end}
          dateStart={date_start}
          isToggleDisabled={isToggleDisabled}
          isOpeningReview={isOpeningReview}
          toggleReview={this.toggleReview}
        />
        {isOpeningReview ? <HotelInfoReviewList reviews={reviews} /> : null}
      </div>
    );
  }
}

export default HotelInfoBody;
