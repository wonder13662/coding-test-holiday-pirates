import React from "react";
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
    return (
      <div>
        {toggleReviewBtn}
        <div>{price}</div>
        <div>{`${date_end}-${date_start}`}</div>
      </div>
    );
  }
}

export default HotelInfoBody;
