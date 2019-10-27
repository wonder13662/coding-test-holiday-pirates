import React from "react";
import ErrorBox from "./ErrorBox";
import HotelItemList from "./HotelItemList";
import { HotelItemListContext } from "./hotel-item-list-context";

class HotelPageBody extends React.Component {
  render() {
    return (
      <HotelItemListContext.Consumer>
        {({ lastUpdated }) => {
          return (
            <div>
              <h3>HotelPageBody:{lastUpdated}</h3>
              <ErrorBox />
              <HotelItemList />
            </div>
          );
        }}
      </HotelItemListContext.Consumer>
    );
  }
}

export default HotelPageBody;
