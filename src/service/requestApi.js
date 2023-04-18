import axios from "axios";
axios.defaults.baseURL = "https://643d38d96afd66da6af0ccb3.mockapi.io";

export const getTweets = async () => {
  try {
    const response = await axios.get("./tweets");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
