import { useState } from "react"

function Profile({name , age , city}){
    const [count , setCount] = useState(0)
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>City: {city}</h2>
            <h2>Likes: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Like</button>
        </div>
    )
}

export default Profile