import axios from "axios";

export default {
  fetchHotelList: function(arg = {}) {
    const defaultArgs = {
      no_error: false,
      force_error: false,
      count: 10,
      min_star: 3,
      max_price: 100
    };
    arg = Object.assign(defaultArgs, arg);
    const { no_error, force_error, count, min_star, max_price } = arg;

    if (force_error) {
      arg = { force_error: `${force_error}` };
    } else {
      arg = {
        no_error: `${no_error}`,
        count: `${count}`,
        min_star: `${min_star}`,
        max_price: `${max_price}`
      };
    }

    return axios.get(`http://fake-hotel-api.herokuapp.com/api/hotels`, {
      params: arg
    });
  },
  fetchReviews: function(hotel_id) {
    return axios.get(`http://fake-hotel-api.herokuapp.com/api/reviews`, {
      params: { hotel_id: `${hotel_id}` }
    });
  }
};
