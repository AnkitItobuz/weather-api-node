import { getWeatherData } from "./getWeatherData.js";

export const getData = (req) => {
  let statusCode = 200;
  try {
    const result = getWeatherData(req.url);
    if (result) {
      return JSON.stringify({
        data: result,
        message: "weather report",
        success: true,
      });
    } else {
      throw new Error("Data not found");
    }
  } catch (error) {
    console.log(error);
  }
};
