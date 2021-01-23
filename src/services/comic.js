/**
 * Comic service
 */

import axios from '../utils/axios'

class Comic {
  allComic(options) {
    return axios.get('/comic/all', options)
  }

}

export default new Comic()
