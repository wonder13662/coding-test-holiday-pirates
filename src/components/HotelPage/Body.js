import React from "react";
import ErrorBox from "./ErrorBox";
import HotelItemList from "./HotelItemList";
import fakeApi from "../../api/holiday-pirates-fake-api";

class HotelPageBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdated: this.props.lastUpdated,
      hotelItemList: [],
      errorMsg: ""
    };
  }

  fetchHotelList() {
    fakeApi
      // .fetchHotelList({ no_error: true, count: 5, min_star: 5 })
      .fetchHotelList({ force_error: true })
      .then(response => {
        console.log("response:", response);
        this.setState({ hotelItemList: response.data, errorMsg: "" });
      })
      .catch(error => {
        console.log("error:", error.response.data.error); // Something failed!
        this.setState({
          hotelItemList: [],
          errorMsg: error.response.data.error
        });
      });
  }

  componentDidMount() {
    this.fetchHotelList();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.lastUpdated !== this.props.lastUpdated) {
      this.fetchHotelList();
    }
  }

  render() {
    const { lastUpdated } = this.props;
    const { hotelItemList, errorMsg } = this.state;

    return (
      <div>
        <h3>HotelPageBody:{lastUpdated}</h3>
        {!!errorMsg ? <ErrorBox errorMsg={errorMsg} /> : null}
        <HotelItemList hotelItemList={hotelItemList} />
      </div>
    );
  }
}

export default HotelPageBody;
