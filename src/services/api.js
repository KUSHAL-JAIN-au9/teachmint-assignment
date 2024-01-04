import axios from "axios";

export const getData = async (url) => {
  try {
    const res = await axios(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
