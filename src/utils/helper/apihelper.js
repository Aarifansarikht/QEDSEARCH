import axios from 'axios';
import {BASE_URL} from './env';
const headers = {
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers as needed
  },
};
export default postrequest = (body, url) => {
  return axios
    .post(BASE_URL + url, body, headers)
    .then(response => {
      // Handle the response data

      return response.data;
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
      throw error;
    });
};
