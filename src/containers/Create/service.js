import axios from 'axios';
// var instance = axios.create({
//   baseURL: '10.201.132.37:8080',
// });
class Service {
  create(params) {
    return axios.post('/trainingcamps', { ...params });
  }
}
const service = new Service();
export default service;