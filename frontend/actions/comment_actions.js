import * as CommentUtils from '../utils/comment_api_utils';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});


export const postComment = comment => dispatch => (
  CommentUtils.postComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const updateComment = comment => dispatch => (
  CommentUtils.updateComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
  CommentUtils.deleteComment(comment.id).then(comment => dispatch(removeComment(comment)))
);
