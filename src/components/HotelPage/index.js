import React from "react";
import Header from "./Header";
import Body from "./Body";
import { HotelItemListContext } from "./hotel-item-list-context";

class HotelPage extends React.Component {
  constructor(props) {
    super(props);

    this.updateHotelListVersion = () => {
      this.setState(state => ({
        lastUpdated: Date.now()
      }));
    };

    this.state = {
      lastUpdated: Date.now(),
      update: this.updateHotelListVersion
    };
  }

  render() {
    return (
      <HotelItemListContext.Provider value={this.state}>
        <div>
          <h3>HotelPage</h3>
          <HotelItemListContext.Consumer>
            {({ lastUpdated, update }) => {
              return (
                <>
                  <Header lastUpdated={lastUpdated} update={update} />
                  <Body lastUpdated={lastUpdated} />
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
