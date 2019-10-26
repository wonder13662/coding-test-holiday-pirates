import React from "react";
import fakeApi from "../../api/holiday-pirates-fake-api";

class HotelPageHeader extends React.Component {
  componentDidMount() {
    fakeApi
      .fetchHotelList({ no_error: true, count: 1, min_star: 5 })
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        console.log("error:", error.response.data.error); // Something failed!
      });

    fakeApi
      .fetchReviews("860c5019-0ec3-44b0-adc1-b6fbb3735b8e")
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        console.log("error:", error.response.data.error); // Something failed!
      });
  }

  render() {
    return (
      <div>
        <h3>HotelPageHeader</h3>
        <button>Load Hotel</button>
      </div>
    );
  }
}

export default HotelPageHeader;
