import {data} from "../data.js";
export const getWeatherData = (loctionString) => {
  let location = loctionString.split("/")[1].toLowerCase();
  if (location.includes("%")) {
    location = location.split("%20").join(" ").toLowerCase();
  }
  return data.find((each) => each.name.toLowerCase() === location);
};
