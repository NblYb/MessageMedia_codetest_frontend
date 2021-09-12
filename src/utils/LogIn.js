import processData from '../apis/processData';

const LogIn = (body) =>
  processData('/login', 'post', {}, null, body).then((response) => response);
export default LogIn;
