import createDataContext from './createDataContext';
import JsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {

  switch (action.type) {
    case 'get_blogPost': {
      return (action.payload);
    }
    case 'add_blogPost': {
      return ([...state, {
        id: Math.floor(Math.random() * 9999),
        title: action.payload.title,
        content: action.payload.content,
      }
      ]);
    }
    case 'edit_blogPost': {
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload
        } else {
          return blogPost;
        }
      });
    }
    case 'delete_blogPost': {
      return (state.filter((blogpost) => {
        return blogpost.id !== action.payload
      }));
    }
    default:
      return state;
  }
}

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await JsonServer.get('/blogposts');
    dispatch({ type: 'get_blogPost', payload: response.data })
  };
}

const addBlogPost = (dispatch) => {
  return async (title, content, callBack) => {

    const response = await JsonServer.post('/blogposts', { title, content })
    // dispatch({ type: 'add_blogPost', payload: { title, content } })
    callBack();
  };
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, callBack) => {
    await JsonServer.put(`blogposts/${id}`, { title, content })
    dispatch({ type: 'edit_blogPost', payload: { id, title, content } })
    callBack();
  };
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await JsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogPost', payload: id })
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []);
