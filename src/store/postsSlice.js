import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // postAdded(state, action) {
        //     state.push(action.payload)
        // },

        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId,
                        reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }
                    }
                }
            }
        },

        postUpdated(state, action) {
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id == id)
            console.log(existingPost);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },

        reactionAdded(state, action) {
            
            const { name, id } = action.payload;
            console.log(id);
            console.log(name);
            const existingPost = state.find(post => post.id == id);
            if (existingPost) {
                existingPost.reactions[name]++
            }
        }
    }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts;
export const selectPostById = (state, postId) => state.posts.find(post => post.id == postId);