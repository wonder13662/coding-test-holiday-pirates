import React from "react";
import moment from "moment";

class HotelInfoBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      isOpeningReview: false,
      isToggleDisabled: false
    };
  }

  render() {
    const { hotelItem, toggleReviewBtn } = this.props;
    const { price, date_end, date_start } = hotelItem;

    const dateStartStr = moment(date_start).format("D.M.YYYY");
    const dateEndStr = moment(date_end).format("D.M.YYYY");

    return (
      <div className="hotel-info--body">
        <div className="toggle-btn-box">{toggleReviewBtn}</div>
        <div className="price-n-period">
          <div className="price">{price} &#8364;</div>
          <div className="period">{`${dateStartStr} - ${dateEndStr}`}</div>
        </div>
      </div>
    );
  }
}

export default HotelInfoBody;
