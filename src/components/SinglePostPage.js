import { logDOM } from "@testing-library/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
    const { postId } = useParams();
    console.log(postId);
    const post = useSelector(state => state.posts.find(post => post.id == postId))
    if (!post) {
        return (
            <section>
                <h2>
                    post not found!
                </h2>
            </section>
        )
    }

    return (
        <>
            <section>
                <article className="post">
                    <h2>{post.title}</h2>
                    <p className="post-content">{post.content}</p>
                </article>
            </section>
        </>
    );
}

export default SinglePostPage;