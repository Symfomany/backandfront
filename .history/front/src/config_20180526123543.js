import axios from "axios";

const ajax = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

export default ajax;