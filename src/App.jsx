import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Kritarth", score: 90 },
    { id: 2, name: "Mehul", score: 65 },
    { id: 3, name: "Rakshit", score: 40 },
    { id: 4, name: "Manav", score: 32 },
  ]);

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const addStudent=(e)=>{
    e.preventDefault();
    if (!name||!score) return;
    const newStudent={
      id: students.length+1,
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
    setName("");
    setScore("");
  };

  const updateScore=(id, newScore)=>{
    setStudents(
      students.map((student)=>
        student.id===id
          ?{ ...student, score: Number(newScore)}
          :student
      )
    );
  };

  const total=students.length;
  const passed=students.filter((s) => s.score >= 40).length;
  const average=
    students.length===0
      ? 0
      : (
          students.reduce((sum, s)=>sum+s.score,0)/
          students.length
        ).toFixed(2);

  return (
    <div className="container">
      <Header />
      <form onSubmit={addStudent} className="form-panel">
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e)=>setScore(e.target.value)}
        />

        <button>Add Student</button>
      </form>

      <div className="stats-panel">
        <div className="stat-card">
          <p>Total Students</p>
          <h2>{total}</h2>
        </div>

        <div className="stat-card pass-card">
          <p>Passed</p>
          <h2>{passed}</h2>
        </div>

        <div className="stat-card avg-card">
          <p>Average Score</p>
          <h2>{average}</h2>
        </div>
      </div>

      <StudentTable
        students={students}
        updateScore={updateScore}
      />
    </div>
  );
}

export default App;