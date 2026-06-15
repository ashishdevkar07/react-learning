import { useState } from "react";

function Studentlist() {
    // array of students are stored in the state , each object has its own id , name , course
    const [students, setStudents] = useState([
        { id: 1, Name: "Ashish", Course: "BCA" },
        { id: 2, Name: "Mangesh", Course: "LLM" },
        { id: 3, Name: "Ramesh", Course: "Biogas Enigneering" }
    ])

    return (
        <div>
            <h2>Student Lists :</h2>
            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.Name}</h3>
                    <p>{student.Course}</p>
                </div>
            ))}
        </div>
    )
} 

export default Studentlist  