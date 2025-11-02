import { useMemo, useState } from "react";
import PostList from "./Components/PostList";
import './styles/App.css'
import PostForm from "./Components/UI/form/AddForm";
import PostFilter from "./Components/PostFilter";
import AppModal from "./Components/UI/modal/AppModal";
import AppButton from "./Components/UI/button/AppButton";

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

  const [modal, setModal] = useState(false);

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

  const sortedAndSearchedPosts = useMemo(() =>
    sortedPosts.filter((post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase())),), [filter.query, sortedPosts]);

  const addPost = (post) => {
    setPosts([...posts, post]);
    setModal(!modal);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <AppModal visible={modal} setVisible={setModal}>
        <PostForm addPostCallback={addPost} />
      </AppModal >

      <AppButton onClick={() => setModal(true)}>Add Post</AppButton>

      <hr style={{ margin: '16px' }} />


      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList posts={sortedAndSearchedPosts} removePost={removePost} title={"JavaScript Posts"} />
    </div>
  );
}

export default App;
