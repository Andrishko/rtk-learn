import { useDispatch } from "react-redux"
import { reactionAdded } from "../store/postsSlice"

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}


const ReactionButton = (props) => {
    const dispatch = useDispatch()
    const IncreaseEmoji = (name, id) => {
        console.log(id);
        dispatch(reactionAdded({ name, id }))
    }

    const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button onClick={() => IncreaseEmoji(name, props.post.id)} key={name} type="button" className="muted-button reaction-button">
                {emoji} {props.post.reactions[name]}
            </button>
        )
    })
    // const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    //     return (
    //         <button key={name} type="button" className="muted-button reaction-button">
    //             {emoji} {post.reactions[name]}
    //         </button>
    //     )
    // })
    return (
        <>
            {reactionButton}
        </>
    );
}

export default ReactionButton;