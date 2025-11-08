import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';
import '../styles/App.css';
import { createRef } from 'react';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <div
        style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}
      >
        No posts found
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>

      <TransitionGroup>
        {posts.map((post) => {
          const ref = createRef();
          return (
            <CSSTransition
              key={post.id}
              nodeRef={ref}
              timeout={250}
              classNames="post"
            >
              <PostItem
                ref={ref}
                remove={remove}
                number={post.id}
                post={post}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
