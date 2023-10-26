import { useSelector } from "react-redux";

const PostAuthor = (props) => {

    const author = useSelector(state =>
        state.users.find(user => user.id == props.userId)
    )

    return <span>by {author ? author.name : 'Unknown author'}</span>
}

export default PostAuthor;