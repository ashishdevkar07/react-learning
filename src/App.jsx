import StudentCard from './practice/Props1'

function App(){
  return(
    <div>
      <StudentCard name="Ashish" age={20} course="BCA"/>
      <StudentCard name="Rahul" age={20} course="BBA"/>
      <StudentCard name="Priya" age={20} course="Law"/>
    </div>
  )
}

export default App