import AppButton from "./UI/button/AppButton";

const PostItem = ({ number, ...props }) => {

    const post = props.post;

    return (
        <div className="post">
            <div className="post-content">
                <strong>{number}. {post.title}</strong>
                <div className="post-description">
                    {post.description}
                </div>
            </div>
            <div className="post-btns">
                <AppButton onClick={() => props.removePost(post)}>Delete</AppButton>
            </div>
        </div>
    );
}

export default PostItem;