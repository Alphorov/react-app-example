import AppButton from './UI/button/AppButton';

const PostItem = ({ number, remove, ...props }) => {
  const post = props.post;

  return (
    <div className="post" {...props}>
      <div className="post-content">
        <strong>
          {number}. {post.title}
        </strong>
        <div className="post-body">{post.body}</div>
      </div>
      <div className="post-btns">
        <AppButton onClick={() => remove(post)}>Delete</AppButton>
      </div>
    </div>
  );
};

export default PostItem;
