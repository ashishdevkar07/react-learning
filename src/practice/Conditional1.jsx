import { useState} from "react";

function LoginStatus({}){
    const[isLoggedIn , setIsLoggedIn] = useState(false)

    return (
        <div>
           <h2 style={{color : isLoggedIn ? "green" : "red"}}>
            {isLoggedIn ? "Welcome back, Ashish!" : "Please Login"}
           </h2>
           <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
           </button>
        </div>
    )
}

export default LoginStatus