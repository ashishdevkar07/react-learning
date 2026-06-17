import { useState } from "react";

function Simpleform() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit() {
        if (name === "" || email === "") {
            alert("Pelase fill all the details")
            return
        }
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div>
                <h2>Form Submitted!</h2>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
            </div>
        )
    }

    return (
        <div>
            <h2>Registration Form : </h2>

            <input
                type="text"
                placeholder="Enter you name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Simpleform