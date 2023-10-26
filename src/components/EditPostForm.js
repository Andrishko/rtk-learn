import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdated } from "../store/postsSlice";

const EditPostForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { postId } = useParams()
    const existingPost = useSelector(state => state.posts.find(post => post.id == postId))

    const [title, setTitle] = useState(existingPost.title)
    const [content, setContent] = useState(existingPost.content)

    const onContentChanged = e => setContent(e.target.value)
    const onTitleChanged = e => setTitle(e.target.value)

    const updatePost = () => {
        if (content && title) {
            dispatch(postUpdated({
                title: title,
                content: content,
            }));
            navigate('/');



        }
    }

    return (
        <section>
            <h2>Change Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={updatePost}>Save Post</button>
            </form>
        </section >

    );
}

export default EditPostForm;