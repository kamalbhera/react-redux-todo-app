 const initState = {
  posts: [
    {id: 1, title: 'post one', content: 'this is post one'},
    {id: 2, title: 'post two', content: 'this is post two'},
  ],
};

const postReducer = (state = initState, action) => {
  const {type,payload}=action
  switch (type) {
    case "DELETE_POST":
      return {
        posts: [...state.posts.filter((post) => post.id !==payload )],
      };
    case "EDIT_POST":
      const editPost = state.posts.map(data=>{if(data.id===payload.id){data.content=payload.content }return data})
      return {
        posts: editPost,
      };
    case "ADD_POST":
      return {
        posts: [action.post, ...state.posts],
      };
    default:
      return state;
  }
};

export default postReducer;
