import React from "react";

class HotelInfoReview extends React.Component {
  render() {
    const { name, comment, positive } = this.props.review;
    return (
      <li className="review-box">
        <div className="positive-or-nagative">
          <div className={`sign ${positive ? "positive" : "netative"}`}>
            {positive ? "+" : "-"}
          </div>
        </div>
        <div className="author-n-comment">
          <div className="author">{name}</div>
          <div className="comment">{comment}</div>
        </div>
      </li>
    );
  }
}

export default HotelInfoReview;
