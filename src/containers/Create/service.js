import axios from 'axios';

class Service {
  create(params) {
    return axios.post('/trainingcamps', { ...params });
  }
}
const service = new Service();
export default service;