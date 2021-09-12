import processData from '../apis/processData';

const PostMessage = (username, JWTToken, body) =>
  processData(`/message/${username}`, 'post', {"Authorization" : `${JWTToken}`}, null, body).then((response) => response);
export default PostMessage;
