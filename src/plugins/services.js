import {
  TokenService,
  UserService,
  CategoryService
} from '../services'

export default Vue => {
  // alias
  const services = {
    token: TokenService,
    user: UserService,
    category: CategoryService
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
