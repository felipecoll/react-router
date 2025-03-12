import { useParams, useNavigate } from 'react-router-dom'
import { blogdata } from './blogData';
import { useAuth } from './auth';


const BlogPost = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const auth = useAuth()

    const post = blogdata.find(post => post.id === parseInt(id))

    const deletePost = auth.user?.isAdmin || BlogPost.author === auth.user?.username

    const returnBlog = () => {
         navigate('/blog')
        // navigate(-1)
    }

    return (
        <>
            <h1>Blog post's</h1>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.author}</p>

            { deletePost&& <button>Eliminar Post</button>}

            <button onClick={returnBlog}>Volver al inicio</button>
        </>
    )
}

export default BlogPost
