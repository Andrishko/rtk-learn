import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";    // omit imports
import { selectAllPosts } from "../store/postsSlice";


const PostsList = () => {

    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    
    const renderedPosts = orderedPosts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
            <ReactionButton post={post} />
            <Link style={{ display: 'block' }} to={`/post/add/${post.id}`}>View Post</Link>
            <Link to={`/post/change/${post.id}`}>Change Post</Link>
        </article>
    ))
    return (
        <>
            <section className="Posts List">
                <h2>Post List</h2>
                {renderedPosts}
            </section>
        </>
    );
}

export default PostsList;