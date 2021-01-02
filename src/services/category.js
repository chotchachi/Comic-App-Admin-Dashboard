/**
 * Category service
 */

import Resource from './resource'

class Category extends Resource {
  constructor () {
    super('category')
  }

  getComments (id, options) {
    return this.get(`${id}/comments`, options)
  }
}

export default new Category()
