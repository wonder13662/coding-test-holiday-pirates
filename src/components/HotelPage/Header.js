import React from "react";

class HotelPageHeader extends React.Component {
  render() {
    const { lastUpdated, update } = this.props;
    return (
      <div>
        <h3>HotelPageHeader</h3>
        <button onClick={update}>Load Hotel:{lastUpdated}</button>
      </div>
    );
  }
}

export default HotelPageHeader;
