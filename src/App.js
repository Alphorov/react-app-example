import { useMemo, useState } from "react";
import PostList from "./Components/PostList";
import './styles/App.css'
import PostForm from "./Components/UI/form/AddForm";
import PostFilter from "./Components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'BJavaScript 1',
      description: 'CJavaScript is a programming language'
    },
    {
      id: 2,
      title: 'AJavaScript 2',
      description: 'BJavaScript is a programming language'
    },
    {
      id: 3,
      title: 'CJavaScript 2',
      description: 'AJavaScript is a programming language'
    },
  ])


  const [filter, setFilter] = useState(
    {
      query: '',
      sort: '',
    }
  );


  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    console.log('sortedAndSearchedPosts');
    return sortedPosts.filter((post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())));
  }, [filter.query, sortedPosts]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">

      <PostForm addPostCallback={addPost} />

      <hr style={{ margin: '16px' }} />

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {
        sortedAndSearchedPosts.length ?
          <PostList posts={sortedAndSearchedPosts} removePost={removePost} title={"JavaScript Posts"} />
          :
          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>No posts found</div>
      }


    </div>
  );
}

export default App;
