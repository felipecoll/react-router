import { Link, Outlet } from 'react-router-dom'
import { blogdata } from './blogData';


const BlogPage = () => {

    const BlogLink = ({ post }) => {
        return (
            <li>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </li>
        )
    }

    return (
        <>
            <h1>Blog page</h1>

            <Outlet />

            <ul>
                {
                    blogdata.map(post => (
                        <BlogLink key={post.id} post={post} />
                    ))
                }
            </ul>
        </>
    )
}

export default BlogPage
