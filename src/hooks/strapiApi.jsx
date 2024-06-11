const { default: axios } = require("axios");

export const apiEndPoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_END_POINT,
});
