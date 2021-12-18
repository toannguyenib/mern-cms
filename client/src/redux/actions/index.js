import { createAction } from 'redux-action';

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const getPosts = createAction({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (err) => err,
});

export const createPost = createAction({
  createPostsRequest: (payload) => payload,
  createPostsSuccess: (payload) => payload,
  createPostsFailure: (err) => err,
});

export const updatePost = createAction({
  updatePostsRequest: (payload) => payload,
  updatePostsSuccess: (payload) => payload,
  updatePostsFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');

/*
  getType(getPosts.getPostSuccess)
  =>  
  {
    type: 'getPostSuccess',
    payload: {
      name: 'Test'
    }
  }
*/