import React from "react";

class HotelInfoReview extends React.Component {
  render() {
    const { name, comment, positive } = this.props.review;

    console.log("positive:", positive);

    return (
      <li>
        <div>{positive ? "+" : "-"}</div>
        <div>{name}</div>
        <div>{comment}</div>
      </li>
    );
  }
}

export default HotelInfoReview;
