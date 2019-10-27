import React from "react";

class HotelInfoDetail extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.price !== nextProps.price) {
      return true;
    }
    if (this.props.dateEnd !== nextProps.dateEnd) {
      return true;
    }
    if (this.props.dateStart !== nextProps.dateStart) {
      return true;
    }

    return false;
  }

  render() {
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
