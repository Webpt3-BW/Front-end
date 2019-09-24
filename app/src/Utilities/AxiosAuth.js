import axios from "axios";

export const config = {
  apiUrl: "https://lambda-mud-test.herokuapp.com",
  axiosWithAuth: function() {
    return axios.create({
      baseURL: this.apiUrl,
      headers: {
        Authorization: 'Token ${localStorage.getItem("authToken")}'
      }
    });
  }
};

export default config;