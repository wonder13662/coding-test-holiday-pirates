import React from "react";
import { Header } from "semantic-ui-react";

const BLACK_STAR = "\u2605";
const WHITE_STAR = "\u2606";

class HotelInfoHeader extends React.Component {
  render() {
    const { name, city, country, stars, description } = this.props;
    let starArr = [WHITE_STAR, WHITE_STAR, WHITE_STAR, WHITE_STAR, WHITE_STAR];
    for (let i = 0; i < stars; i++) {
      starArr[i] = BLACK_STAR;
    }

    return (
      <div className="hotel-info--header">
        <div className="hotel-name">
          <Header as="h1">{name}</Header>
        </div>
        <div className="hotel-location">
          <Header as="h4">{`${city}-${country}`}</Header>
        </div>
        <div className="stars">
          <Header as="h3">{starArr.join(" ")}</Header>
        </div>
        <div className="hotel-desc">{description}</div>
      </div>
    );
  }
}

export default HotelInfoHeader;
