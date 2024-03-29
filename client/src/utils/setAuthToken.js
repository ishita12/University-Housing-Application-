import axios from 'axios';

const setAuthToken = token => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // delete auth headers
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;
