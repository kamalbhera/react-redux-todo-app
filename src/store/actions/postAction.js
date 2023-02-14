export const addPost = (post) => {
  return { type: "ADD_POST", post }
}

export const deletePost = (id) => {
  return { type: "DELETE_POST", payload: id }
}

export const editPost = (newPost) =>{
  return {
      type: "EDIT_POST",
      payload: {
          post: newPost
      }
  }
}