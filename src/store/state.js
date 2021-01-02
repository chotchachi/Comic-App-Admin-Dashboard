import { storage } from '../utils'

export default {
  session: storage.get('session') ?? {},
  header: {
    name: process.env.VUE_APP_NAME,
    menus: [
      {
        text: '0',
        icon: 'bubble',
        name: 'comments'
      },
      {
        text: 'New',
        icon: 'plus',
        name: 'new',
        params: { type: 'blog' },
        children: [
          { text: 'Post', name: 'new', params: { type: 'blog' } },
          { text: 'Media', name: 'upload' },
          { text: 'Page', name: 'new', params: { type: 'page' } },
          { text: 'User', name: 'users' }
        ]
      },
      // Component Pages
      {
        text: 'Components',
        icon: 'lab',
        name: 'components',
        children: [
          { text: 'Icons', name: 'components-icons' },
          { text: 'Button', name: 'components-button' },
          { text: 'Table', name: 'components-table' }
        ]
      },
      // Demo Pages
      {
        text: 'Demo',
        icon: 'magic-wand',
        name: 'demo',
        children: [
          { text: 'Data', name: 'demo-data' },
          { text: 'Params', name: 'demo-params', params: { name: '汪磊' } },
          { text: 'Vuex', name: 'demo-vuex' },
          { text: 'I18n', name: 'demo-i18n' },
          { divider: true },
          { text: 'Proxy', name: 'demo-proxy' },
          { text: 'CORS', name: 'demo-cors' },
          { divider: true },
          { text: 'NotFound', path: '/hello-world' }
        ]
      }
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
        name: 'posts',
        params: { type: 'blog' },
        children: [
          { text: 'All categories', name: 'posts', params: { type: 'blog' } }
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
