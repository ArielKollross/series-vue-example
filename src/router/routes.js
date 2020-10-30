import Auth from '../modules/auth/routes';


const Home = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home')
  },
]

export default [
  ...Auth,
  ...Home,
]