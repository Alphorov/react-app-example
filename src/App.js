import './styles/App.css';
import { useEffect, useState } from 'react';
import PostForm from './Components/UI/form/AddForm';
import AppModal from './Components/UI/modal/AppModal';
import AppButton from './Components/UI/button/AppButton';
import Pagination from './Components/UI/pagination/Pagination';
import CircularProgressIndicator from './Components/UI/progress_indicator/CircularProgressIndicator';
import { getPagesCount } from './Components/utils/pages';
import PostList from './Components/PostList';
import PostFilter from './Components/PostFilter';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import useFetch from './hooks/useFetch';

function App() {
  const [posts, setPosts] = useState([]);

  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({
    query: '',
    sort: '',
  });

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPost, loading, error] = useFetch(async () => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
    setPosts(response.data);
    return;
  });

  useEffect(() => {
    fetchPost();
  }, [page]);

  const addPost = (post) => {
    setPosts([...posts, post]);
    setModal(!modal);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <AppModal visible={modal} setVisible={setModal}>
        <PostForm addPostCallback={addPost} />
      </AppModal>

      <AppButton onClick={() => setModal(true)}>Add Post</AppButton>

      <hr style={{ margin: '16px' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {error && <h1>An error: {error}</h1>}

      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '64px',
          }}
        >
          <CircularProgressIndicator />
        </div>
      ) : (
        <div>
          <PostList
            posts={sortedAndSearchedPosts}
            remove={removePost}
            title={'JavaScript Posts'}
          />
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
}

export default App;
