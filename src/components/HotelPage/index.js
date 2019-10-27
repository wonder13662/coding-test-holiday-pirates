import React from "react";
import Header from "./Header";
import Body from "./Body";
import "../../css/hotel-page.css";
import { HotelItemListContext } from "./hotel-item-list-context";

class HotelPage extends React.Component {
  constructor(props) {
    super(props);

    this.updateTimestampRequestHotelList = () => {
      this.setState(state => ({
        timestampRequestHotelList: Date.now()
      }));
    };

    this.updateTimestampResponseHotelList = () => {
      this.setState(state => ({
        timestampResponseHotelList: Date.now()
      }));
    };

    this.state = {
      timestampRequestHotelList: Date.now(),
      timestampResponseHotelList: Date.now(),
      updateTimestampRequestHotelList: this.updateTimestampRequestHotelList,
      updateTimestampResponseHotelList: this.updateTimestampResponseHotelList
    };
  }

  render() {
    return (
      <HotelItemListContext.Provider value={this.state}>
        <div className="hotel-page">
          <HotelItemListContext.Consumer>
            {({
              timestampRequestHotelList,
              timestampResponseHotelList,
              updateTimestampRequestHotelList,
              updateTimestampResponseHotelList
            }) => {
              return (
                <>
                  <Header
                    timestampRequestHotelList={timestampRequestHotelList}
                    timestampResponseHotelList={timestampResponseHotelList}
                    updateTimestampRequestHotelList={
                      updateTimestampRequestHotelList
                    }
                  />
                  <Body
                    timestampRequestHotelList={timestampRequestHotelList}
                    updateTimestampResponseHotelList={
                      updateTimestampResponseHotelList
                    }
                  />
                </>
              );
            }}
          </HotelItemListContext.Consumer>
        </div>
      </HotelItemListContext.Provider>
    );
  }
}

export default HotelPage;
