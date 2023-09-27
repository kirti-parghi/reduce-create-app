import React, { useEffect, useState } from "react";
import Tr from "./Tr";
import axios from "axios";

const Table = ({ students, deleteStudent, editStudent }) => {
  const [tableStudents, setTableStudents] = useState([]);

  useEffect(() => {
    setTableStudents(students);
  }, [students]);

  return (
    <>
      <h1>Total Students {students.length}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Image</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableStudents.map((student, studentIndex) => {
            return (
              <Tr
                student={student}
                key={studentIndex}
                deleteStudent={deleteStudent}
                studentIndex={studentIndex}
                editStudent={editStudent}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
