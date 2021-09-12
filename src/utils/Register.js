import processData from '../apis/processData';

const Register = (body) =>
  processData('/register', 'post', {}, null, body).then((response) => response);
export default LogIn;
