import { useState } from "react";

function ProfileForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const [submit, setSubmitted] = useState(false)

    const handlesReset =() => {
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
    };

    function handleSubmits() {
        if (name === "" || email === "" || number === "" || message === "") {
            alert("Please fill all the details")
            return
        }
        setSubmitted(true)
    }


    if (submit) {
        return (
            <div>
                <h2>Form Submitted :</h2>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Contact Number : {number}</p>
                <p>Message : {message}</p>
                <button onClick={() => {
                    handlesReset()
                    setSubmitted(false)
                }} >Send Another</button>
            </div>
        )
    }

    return (
        <div>
            <h2>Registration Form :</h2>

            <input
                
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your mobile number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
                type="text"
                placeholder="Add some info about yourself"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button onClick={handleSubmits}>Submit</button>
            <button onClick={handlesReset}>Reset</button>
        </div>
    )
}

export default ProfileForm