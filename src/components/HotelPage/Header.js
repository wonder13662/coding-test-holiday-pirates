import React from "react";
import { Button } from "semantic-ui-react";

class HotelPageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.updateTimestampRequestHotelList();
    this.setState({ isDisabled: true });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.timestampResponseHotelList !==
      prevProps.timestampResponseHotelList
    ) {
      this.setState({ isDisabled: false });
    }
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div className="hotel-page--header-box">
        {isDisabled ? (
          <Button color="teal" onClick={this.handleOnClick} disabled>
            Load Hotel
          </Button>
        ) : (
          <Button color="teal" onClick={this.handleOnClick}>
            Load Hotel
          </Button>
        )}
      </div>
    );
  }
}

export default HotelPageHeader;
