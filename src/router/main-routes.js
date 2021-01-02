export default [
  // - Dashboard
  {
    name: 'home',
    path: '/',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'home' */ '../views/home')
  },
  // - Categories
  {
    name: 'category',
    path: '/category/:type',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'posts' */ '../views/categories')
  },
  // - Users
  {
    name: 'users',
    path: '/users',
    meta: { requireAuth: true },
    component: () => import(/* webpackChunkName: 'users' */ '../views/users')
  }
]
