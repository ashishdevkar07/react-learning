// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation */}
//       <nav>
//         <Link to="/">Home |    </Link>
//         <Link to="/about">About   |  </Link>
//         <Link to="/contact">Contact  |   </Link>
//       </nav>

//       {/* Pages */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Intro from "./about-me/Intro";
import education from "./about-me/education";
import skills from "./about-me/skills";
import hobbies from "./about-me/hobbies";

function App() {
  return (
<BrowserRouter>
      <nav>
        <h1>About Myslef</h1>
        <Link to="/">Introduction |  </Link>
        <Link to="/education"> Education |  </Link>
        <Link to="/skills"> Skills | </Link>
        <Link to="/hobbies"> Hobbies </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
        </BrowserRouter>
  )
}

export default App