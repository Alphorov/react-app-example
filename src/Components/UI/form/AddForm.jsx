import { useState } from 'react';
import AppButton from '../button/AppButton';
import AppInput from '../input/AppInput';

const PostForm = ({ addPostCallback }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: crypto.randomUUID(),
      ...post,
    };

    addPostCallback(newPost);
    setPost({ title: '', body: '' });
  };
  return (
    <form>
      <AppInput
        type={'text'}
        placeholder="Title"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />

      <AppInput
        type={'text'}
        placeholder="body"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />

      <AppButton
        disabled={post.title.length === 0 || post.body.length === 0}
        onClick={addPost}
      >
        Add Article
      </AppButton>
    </form>
  );
};

export default PostForm;
