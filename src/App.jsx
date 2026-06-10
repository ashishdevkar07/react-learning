import Profile from "./practice/ProfileCard";

function App() {
  return (
  <div>
    <h2>Student Card</h2>
    <Profile name="Ashish" age={20} city="pune" />
    <Profile name="Sejal" age={20} city="pune" />
  </div>
)
}

export default App