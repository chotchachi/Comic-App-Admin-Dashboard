/**
 * Users service
 */

import axios from '../utils/axios'

class User {
  login(options) {
    return axios.post('/users/login', options)
  }

  me() {
    return axios.get('/users/me')
  }

  checkToken() {
    return axios.get('/users/token')
  }

  logout(token) {

  }

  allUsers(options) {
    return axios.get('/users/all', options)
  }
}

export default new User()
