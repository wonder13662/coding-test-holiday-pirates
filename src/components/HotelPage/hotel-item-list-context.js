import React from "react";

export const HotelItemListContext = React.createContext({
  lastUpdated: null,
  update: () => {}
});
