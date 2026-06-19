import { useState, useEffect } from "react";

function Userdata() {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPost(data.slice(0, 10))
                setLoading(false)
            })
            .catch(err => {
                setError("Something went wrong...")
                setLoading(false)
            })
    } ,[])

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>

    return (
        <div>
            <h2>Post list :</h2>
            {post.map(posts => (
                <div key={posts.id}>
                    <p>{posts.id}</p>
                    <p>{posts.title}</p>
                    <p>{posts.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Userdata