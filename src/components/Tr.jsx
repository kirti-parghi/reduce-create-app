import React from "react";

const Tr = ({ student, deleteStudent, studentIndex, editStudent }) => {
  return (
    <tr>
      <td>{studentIndex + 1}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>
        <img
          src={student.avtar}
          alt=""
          height={"60px"}
          width={"60px"}
          className="rounded-circle"
        />
      </td>
      <td>{student.city}</td>
      <td>
        <button
          className="btn btn-primary me-5"
          onClick={() => {
            editStudent(student);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteStudent(student.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Tr;
