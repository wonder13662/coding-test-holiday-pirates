import React from "react";

class HotelInfoDetail extends React.Component {
  // TODO Prevent update from the parent review toggle
  render() {
    console.log("HotelInfoDetail.js / Render");

    const { price, dateEnd, dateStart, toggleReview } = this.props;
    return (
      <div>
        <button onClick={toggleReview}>Show Review</button>
        <div>{price}</div>
        <div>{`${dateEnd}-${dateStart}`}</div>
      </div>
    );
  }
}

export default HotelInfoDetail;
