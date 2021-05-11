export const api =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3333"
    : "https://api-curtas-tv.herokuapp.com";
