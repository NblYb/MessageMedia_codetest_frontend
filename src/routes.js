import LogInPage from './pages/LogInPage/LogInPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MessagePage from './pages/MessagePage/MessagePage';
export const ROUTES = [
  {
    key: 'LogIn',
    path: '/',
    page: LogInPage,
  },
  {
    key: 'Register',
    path: '/register',
    page: RegisterPage,
  },
  {
    key: 'message',
    path: '/message',
    page: MessagePage,
  }
];
