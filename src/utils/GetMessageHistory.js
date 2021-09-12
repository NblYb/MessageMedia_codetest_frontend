import processData from '../apis/processData';

const GetMessageHistory = (username, JWTToken) =>
  processData(`/message/${username}`, 'get', {"Authorization" : `${JWTToken}`}, null, null).then((response) => response);
export default GetMessageHistory;
