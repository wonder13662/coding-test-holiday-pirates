import React from "react";

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
    const { timestampRequestHotelList } = this.props;
    const { isDisabled } = this.state;
    return (
      <div>
        <h3>HotelPageHeader</h3>
        {isDisabled ? (
          <button onClick={this.handleOnClick} disabled>
            Load Hotel:{timestampRequestHotelList}
          </button>
        ) : (
          <button onClick={this.handleOnClick}>
            Load Hotel:{timestampRequestHotelList}
          </button>
        )}
      </div>
    );
  }
}

export default HotelPageHeader;
