import PostListView from '../views/PostListView.vue'

const routes = [
  {
    path: '/',
    name: 'post-list',
    component: PostListView
  },
  {
    path: '/posts/:id',
    name: 'post-detail',
    component: () => import('../views/PostDetailView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404View.vue')
  }
]

export default routes