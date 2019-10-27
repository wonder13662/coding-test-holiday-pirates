import React from "react";

class HotelInfoHeader extends React.Component {
  render() {
    const { name, city, country, stars } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{`${city}-${country}`}</div>
        <div>{stars}</div>
      </div>
    );
  }
}

export default HotelInfoHeader;
