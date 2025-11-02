import PostItem from './PostItem'

const PostList = ({ posts, title, removePost }) => {

    if (!posts.length) {
        return (<div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>No posts found</div>);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>

            {posts.map(
                (post, index) => <PostItem removePost={removePost} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    );
}



export default PostList;