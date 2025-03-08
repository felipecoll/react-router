import { Link, useParams } from 'react-router-dom'
import { blogdata } from './blogData';


const BlogPost = () => {

    const {id} = useParams();

    const post = blogdata.find(post => post.id === parseInt(id))

    return (
        <>
            <h1>Blog post's</h1>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </>
    )
}

export default BlogPost
