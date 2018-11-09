import Home from './components/pages/Home/Home';

const appRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home, exact: true },
];

export default appRoutes;
