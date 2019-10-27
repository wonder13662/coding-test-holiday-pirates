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
    if (this.props.isToggleDisabled !== nextProps.isToggleDisabled) {
      return true;
    }
    if (this.props.isOpeningReview !== nextProps.isOpeningReview) {
      return true;
    }

    return false;
  }

  render() {
    const {
      price,
      dateEnd,
      dateStart,
      toggleReview,
      isToggleDisabled,
      isOpeningReview
    } = this.props;
    return (
      <div>
        {isToggleDisabled ? (
          <button onClick={toggleReview} disabled>
            Show Review
          </button>
        ) : (
          <button onClick={toggleReview}>
            {isOpeningReview ? "Close Review" : "Show Review"}
          </button>
        )}
        <div>{price}</div>
        <div>{`${dateEnd}-${dateStart}`}</div>
      </div>
    );
  }
}

export default HotelInfoDetail;
