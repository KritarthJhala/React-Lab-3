import { useState } from "react";

function StudentTable({students, updateScore}) {
  const [editScores, setEditScores]=useState({});

  const handleChange=(id, value)=>{
    setEditScores({ ...editScores, [id]: value });
  };

  return (
    <div className="table-panel">
      <h3 className="table-title">Student Records</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => {
            const status=
              student.score>=40 ? "Pass" : "Fail";

            return (
              <tr key={student.id}>
                <td>{student.name}</td>

                <td className="score-highlight">
                  {student.score}
                </td>

                <td
                  className={
                    status==="Pass"
                      ? "pass"
                      : "fail"
                  }
                >
                  {status}
                </td>

                <td>
                  <input
                    type="number"
                    value={
                      editScores[student.id] ??
                      student.score
                    }
                    onChange={(e)=>
                      handleChange(
                        student.id,
                        e.target.value
                      )
                    }
                  />

                  <button
                    className="update-btn"
                    onClick={()=>
                      updateScore(
                        student.id,
                        editScores[student.id]
                      )
                    }
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;