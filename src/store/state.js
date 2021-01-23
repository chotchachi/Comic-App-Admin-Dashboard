import { storage } from '../utils'

export default {
  session: storage.get('session') ?? {},
  header: {
    name: process.env.VUE_APP_NAME,
    menus: [
    ]
  },
  sidebar: {
    copyright: process.env.VUE_APP_NAME,
    collapse: window.innerWidth < 768 || storage.get('sidebar_collapse'),
    menus: [
      {
        title: 'Actions'
      },
      {
        text: 'Dashboard',
        icon: 'meter',
        name: 'home',
        children: [
          { text: 'Home', name: 'home' }
        ]
      },
      {
        divider: true
      },
      {
        text: 'Categories',
        icon: 'pushpin',
        name: 'category',
        params: { type: 'all' },
        children: [
          { text: 'All categories', name: 'category', params: { type: 'all' } }
        ]
      },
      {
        text: 'Comics',
        icon: 'pushpin',
        name: 'comics',
        params: { type: 'all' },
        children: [
          { text: 'Comics', name: 'comics', params: { type: 'all' } }
        ]
      },
      {
        divider: true
      },
      {
        text: 'Users',
        icon: 'users',
        name: 'users',
        children: [
          { text: 'All users', name: 'users' }
        ]
      }
    ]
  },

  // ==================== DEMO ====================

  count: storage.get('demo_count') ?? 0
}
