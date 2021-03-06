import React from "react";
import HotelInfoHeader from "./HotelInfoHeader";
import HotelInfoBody from "./HotelInfoBody";

class HotelInfo extends React.Component {
  render() {
    const { hotelItem, toggleReviewBtn } = this.props;
    const { name, city, country, stars, description } = hotelItem;

    return (
      <div>
        <HotelInfoHeader
          name={name}
          city={city}
          country={country}
          stars={stars}
          description={description}
        />
        <HotelInfoBody
          hotelItem={hotelItem}
          toggleReviewBtn={toggleReviewBtn}
        />
      </div>
    );
  }
}

export default HotelInfo;
