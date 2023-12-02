import axios from 'axios';
import {api_key} from '@env'

export const instance = axios.create({
 baseURL: `https://api.themoviedb.org/3/discover/movie?`,
 headers: {
  accept: 'application/json',
  Authorization:  `Bearer ${process.env.api_key}`
},
params:{
  include_adult:"false",
  include_video:"false",
  language:"tr-TR",
  page:"1",
  sort_by:"popularity.desc"
}
});

// instance.get('popular')
// .then(response => console.log(response.data))
// .catch(err => {
//   if (err.response) {
//     // The client received an error response (5xx, 4xx)
//     console.log(err.response.data);
//     console.log(err.response.status);
//     console.log(err.response.headers);
//   } else if (err.request) {
//     // The request was made but no response was received
//     console.log(err.request);
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log('Error', err.message);
//   }
// });
