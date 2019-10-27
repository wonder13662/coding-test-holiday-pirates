import React from "react";
import ErrorBox from "./ErrorBox";
import HotelItemList from "./HotelItemList";
import fakeApi from "../../api/holiday-pirates-fake-api";

import { hotel_list } from "../../mockup/hotel-list";

class HotelPageBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: this.props.lastUpdated,
      hotelItemList: []
    };
  }

  fetchHotelList() {
    fakeApi
      .fetchHotelList({ no_error: true, count: 10, min_star: 5 })
      .then(response => {
        console.log("response:", response);
      })
      .catch(error => {
        console.log("error:", error.response.data.error); // Something failed!
      });
  }

  componentDidMount() {
    console.log("hotel_list:", hotel_list);
    this.setState({ hotelItemList: hotel_list });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.lastUpdated !== this.props.lastUpdated) {
      console.log("hotel_list:", hotel_list);
      this.setState({ hotelItemList: hotel_list });

      // 1. Fetch the data from the server
      // fetchHotelList();
    }
  }

  render() {
    const { lastUpdated } = this.props;
    const { hotelItemList } = this.state;

    return (
      <div>
        <h3>HotelPageBody:{lastUpdated}</h3>
        <ErrorBox />
        <HotelItemList hotelItemList={hotelItemList} />
      </div>
    );
  }
}

export default HotelPageBody;
