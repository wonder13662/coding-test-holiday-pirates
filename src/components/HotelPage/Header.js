import React from "react";
import fakeApi from "../../api/holiday-pirates-fake-api";
import { hotel_list } from "../../mockup/hotel-list";
import { review_list } from "../../mockup/hotel-review-list";
import { HotelItemListContext } from "./hotel-item-list-context";

class HotelPageHeader extends React.Component {
  fetchSampleDatas() {
    fakeApi
      .fetchHotelList({ no_error: true, count: 10, min_star: 5 })
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

  componentDidMount() {
    // this.fetchSampleDatas();
    console.log("hotel_list:", hotel_list);
    console.log("review_list:", review_list);

    // lastUpdated: null,
    // update: () => {}
  }

  render() {
    return (
      <HotelItemListContext.Consumer>
        {({ lastUpdated, update }) => {
          return (
            <div>
              <h3>HotelPageHeader</h3>
              <button onClick={update}>Load Hotel:{lastUpdated}</button>
            </div>
          );
        }}
      </HotelItemListContext.Consumer>
    );
  }

  /*
  render() {
    return (
      <HotelItemListContext.Consumer>
        <div>
          <h3>HotelPageHeader</h3>
          {({ lastUpdated, update }) => (
            <button onClick={update}>Load Hotel:{lastUpdated}</button>
          )}
        </div>
      </HotelItemListContext.Consumer>
    );
  }
  */
}

export default HotelPageHeader;
