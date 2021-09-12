import HomePage from './pages/HomePage/HomePage';
import MessagePage from './pages/MessagePage/MessagePage';
export const ROUTES = [
  {
    key: 'Home',
    path: '/',
    page: HomePage,
  },
  {
    key: 'message',
    path: '/message',
    page: MessagePage,
  }
];
