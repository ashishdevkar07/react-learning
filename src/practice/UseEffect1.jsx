import { useState, useEffect } from "react";

function UserProfile({}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(result => result.json())
            .then(data => setUser(data))
    }, [])

    if (user == null) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>ID: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>UserName: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>City: {user.address.city}</h2>
        </div>
    )
}

export default UserProfile