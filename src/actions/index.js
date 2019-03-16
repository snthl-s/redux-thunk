import data from '../apis/data';

export const fetchPosts =  () => async (dispatch) => {
        const response =  await data.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload:response.data})
    };