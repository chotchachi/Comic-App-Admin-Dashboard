import {
  UserService,
  CategoryService, ComicService
} from '../services'

export default Vue => {
  // alias
  const services = {
    user: UserService,
    category: CategoryService,
    comic: ComicService
  }

  // mount the services to Vue
  Object.defineProperties(Vue, {
    services: { get: () => services }
  })

  // mount the services to Vue component instance
  Object.defineProperties(Vue.prototype, {
    $services: { get: () => services }
  })
}
