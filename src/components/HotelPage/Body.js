import React from "react";
import ErrorBox from "./ErrorBox";
import HotelItemList from "./HotelItemList";
import fakeApi from "../../api/holiday-pirates-fake-api";

class HotelPageBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestampRequestHotelList: this.props.timestampRequestHotelList,
      hotelItemList: [],
      errorMsg: ""
    };

    this.fetchHotelListForceError = this.fetchHotelListForceError.bind(this);
    this.fetchHotelListNoError = this.fetchHotelListNoError.bind(this);
    this.fetchHotelListRandom = this.fetchHotelListRandom.bind(this);
    this.fetchHotelList = this.fetchHotelList.bind(this);
  }

  fetchHotelListForceError() {
    this.fetchHotelList({ force_error: true });
  }

  fetchHotelListNoError(count = 5, min_start = 5) {
    this.fetchHotelList({ no_error: true, count: count, min_star: min_start });
  }

  fetchHotelListRandom(count = 5, min_start = 5) {
    this.fetchHotelList({ count: count, min_star: min_start });
  }

  fetchHotelList(option) {
    const { updateTimestampResponseHotelList } = this.props;
    fakeApi
      .fetchHotelList(option)
      .then(response => {
        updateTimestampResponseHotelList();
        this.setState({ hotelItemList: response.data, errorMsg: "" });
      })
      .catch(error => {
        updateTimestampResponseHotelList();
        this.setState({
          hotelItemList: [],
          errorMsg: error.response.data.error
        });
      });
  }

  componentDidMount() {
    this.fetchHotelListRandom();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.timestampRequestHotelList !==
      this.props.timestampRequestHotelList
    ) {
      this.fetchHotelListRandom();
    }
  }

  render() {
    const { hotelItemList, errorMsg } = this.state;

    return (
      <div>
        {!!errorMsg ? <ErrorBox errorMsg={errorMsg} /> : null}
        <HotelItemList hotelItemList={hotelItemList} />
      </div>
    );
  }
}

export default HotelPageBody;
