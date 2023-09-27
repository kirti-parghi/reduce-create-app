import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import { useEffect, useReducer, useState } from "react";

const studentReducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return action.resStudents;
    case "INSERT":
      return [...state, action.newStudent];
    case "UPDATE":
      let _students = [...state];
      let indexToUpdate = _students.findIndex(
        ({ id }) => id === action.updatedStudent.id
      );
      _students[indexToUpdate] = action.updatedStudent;
      return _students;
    case "DELETE":
      return state.filter((student) => student.id != action.sid);
    default:
      return state;
  }
};

function Home() {
  // const [students, setStudents] = useState([]);
  const [students, dispatch] = useReducer(studentReducer, []);
  const [studentToEdit, setStudentToEdit] = useState({
    id: "",
    name: "",
    age: 0,
    avtar: "",
    city: "",
  });

  const deleteStudent = (id) => {
    // console.log("Delete called for " + id);
    axios
      .delete("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student/" + id)
      .then((res) => {
        // let _students = students.filter((student) => student.id != id);
        // setStudents(_students);
        dispatch({ type: "DELETE", sid: id });
      });
  };

  const insertStudent = async (student) => {
    axios
      .post("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student", student)
      .then((res) => {
        // setStudents([...students, res.data]);
        dispatch({ type: "INSERT", newStudent: res.data });
      });
  };

  const updateStudent = async (student) => {
    axios
      .put(
        "https://64bfed3b0d8e251fd111b2b8.mockapi.io/student/" + student.id,
        student
      )
      .then((res) => {
        // let _students = [...students];
        // _students[_students.findIndex(({ id }) => id === student.id)] =
        //   res.data;
        // setStudents(_students);
        dispatch({ type: "UPDATE", updatedStudent: res.data });
      });
  };

  const editStudent = (student) => {
    setStudentToEdit(student);
  };

  useEffect(() => {
    axios
      .get("https://64bfed3b0d8e251fd111b2b8.mockapi.io/student")
      .then((res) => {
        // setStudents(res.data);
        dispatch({ type: "FETCH", resStudents: res.data });
      });
  }, []);

  return (
    <div className="container my-5">
      <Form
        insertStudent={insertStudent}
        updateStudent={updateStudent}
        studentToEdit={studentToEdit}
      />
      <Table
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default Home;
