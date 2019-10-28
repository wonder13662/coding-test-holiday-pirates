import React from "react";
import ErrorBox from "./ErrorBox";
import HotelItemList from "./HotelItemList";
import fakeApi from "../../api/holiday-pirates-fake-api";

class HotelPageBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestampRequestHotelList: props.timestampRequestHotelList,
      hotelItemList: [],
      errorMsg: "",
      checkedForceError: false
    };

    this.fetchHotelListForceError = this.fetchHotelListForceError.bind(this);
    this.fetchHotelListNoError = this.fetchHotelListNoError.bind(this);
    this.fetchHotelListRandom = this.fetchHotelListRandom.bind(this);
    this.fetchHotelList = this.fetchHotelList.bind(this);

    this.handleForceErrorChange = this.handleForceErrorChange.bind(this);
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
        let hotelItemList = [];
        if (!!response && !!response.data) {
          hotelItemList = response.data;
        }
        this.setState({ hotelItemList: hotelItemList, errorMsg: "" });
      })
      .catch(error => {
        updateTimestampResponseHotelList();
        this.setState({
          hotelItemList: [],
          errorMsg:
            !!error && !!error.response && !!error.response.data
              ? error.response.data.error
              : "An error occur"
        });
      });
  }

  handleForceErrorChange(e) {
    const { checkedForceError } = this.state;
    this.setState({ checkedForceError: !checkedForceError });
  }

  componentDidMount() {
    this.fetchHotelListRandom();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.timestampRequestHotelList !==
      this.props.timestampRequestHotelList
    ) {
      if (this.state.checkedForceError) {
        this.fetchHotelListForceError();
      } else {
        this.fetchHotelListRandom();
      }
    }
  }

  render() {
    const { hotelItemList, errorMsg, checkedForceError } = this.state;

    return (
      <div>
        <div className="force-error-box">
          <input
            type="checkbox"
            name="forceError"
            checked={checkedForceError}
            onChange={this.handleForceErrorChange}
          />
          &nbsp;Force Error
        </div>
        {!!errorMsg ? <ErrorBox errorMsg={errorMsg} /> : null}
        <HotelItemList hotelItemList={hotelItemList} />
      </div>
    );
  }
}

export default HotelPageBody;
