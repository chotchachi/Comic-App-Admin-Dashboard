import { TokenService, UserService } from '../services'
import { CHANGE_TITLE, CHANGE_SESSION, TOGGLE_SIDEBAR_COLLAPSE, INCREMENT, DECREMENT } from './mutation-types'

/**
 * @type {{incrementAsync: (function({commit: *}): number), getCurrentUser: (function({commit: *}): Promise<*>), toggleSidebarCollapse: actions.toggleSidebarCollapse, decrementAsync: (function({commit: *}): number), decrement: (function({commit: *}): *), increment: (function({commit: *}): *), changeTitle: actions.changeTitle, createToken: (function({commit: *}, {username: *, password: *}): Promise<*>), deleteToken: (function({commit: *, getters: *}): Promise<void>), checkToken: (function({commit: *, getters: *}): Promise<boolean|undefined>)}}
 */
const actions = {
  changeTitle: ({ commit }, title) => {
    commit(CHANGE_TITLE, title)
  },
  createToken: async ({ commit }, { username, password }) => {
    const res = await TokenService.post({
      username: username.trim(),
      password: password.trim()
    })
    commit(CHANGE_SESSION, { token: res.data.token })
    return res.data.token
  },
  checkToken: async ({ commit, getters }) => {
    // validate local store
    if (!getters.session.token) {
      return Promise.resolve(false)
    }
    // remote
    try {
      await TokenService.get()
      return true
    } catch (err) {
      console.error(err)
      commit(CHANGE_SESSION, { token: null })
      return false
    }
  },
  deleteToken: async ({ commit, getters }) => {
    // await TokenService.delete(getters.session.token)
    commit(CHANGE_SESSION, { token: null })
  },
  getCurrentUser: async ({ commit }) => {
    const res = await UserService.get('me')
    commit(CHANGE_SESSION, { user: res.data })
    return res.data
  },
  toggleSidebarCollapse: ({ commit }) => {
    commit(TOGGLE_SIDEBAR_COLLAPSE)
  },

  // ==================== DEMO ====================
  increment: ({ commit }) => commit(INCREMENT),
  incrementAsync: ({ commit }) => setTimeout(() => commit(INCREMENT), 1000),
  decrement: ({ commit }) => commit(DECREMENT),
  decrementAsync: ({ commit }) => setTimeout(() => commit(DECREMENT), 1000)
}

export default actions
