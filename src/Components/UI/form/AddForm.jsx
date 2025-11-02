import { useState } from "react";
import AppButton from '../button/AppButton';
import AppInput from '../input/AppInput'

const PostForm = ({ addPostCallback }) => {

    const [post, setPost] = useState({ title: '', description: '' });

    const addPost = (event) => {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            ...post
        }

        addPostCallback(newPost);
        setPost({ title: '', description: '' });
    }
    return <form>
        <AppInput
            type={"text"}
            placeholder="Title"
            value={post.title}
            onChange={event => setPost({ ...post, title: event.target.value })}
        />

        <AppInput
            type={"text"}
            placeholder="Description"
            value={post.description}
            onChange={event => setPost({ ...post, description: event.target.value })}
        />

        <AppButton disabled={(post.title.length === 0 || post.description.length === 0)} onClick={addPost}>Add Article</AppButton>
    </form>
}

export default PostForm;