import { useState, useEffect } from "react";

function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users") 
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
            .catch(err => {
                setError("Something went wrong...")
                setLoading(false)
            })
    }, [])

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>

    return (
        <div>
            <h2>Users List :</h2>
            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.address.city}</p>
                </div>
            ))}
        </div>
    )
}

export default UserList