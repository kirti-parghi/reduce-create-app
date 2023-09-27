import React, { useEffect, useState } from "react";

const Form = ({ insertStudent, updateStudent, studentToEdit }) => {
  const [tempStudent, setTempStudent] = useState(studentToEdit);

  useEffect(() => {
    setTempStudent(studentToEdit);
  }, [studentToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tempStudent.id == "") {
      //insert
      insertStudent(tempStudent);
    } else {
      //update
      updateStudent(tempStudent);
    }
    setTempStudent({
      id: "",
      name: "",
      age: 0,
      avtar: "",
      city: "",
    });
  };

  return (
    <form
      className="my-5 border border-3 p-3 rounded"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="my-3">
        <label htmlFor="fName">Full Name</label>
        <input
          type="text"
          name="fName"
          id="fName"
          value={tempStudent.name}
          className="form-control"
          onChange={(e) =>
            setTempStudent({ ...tempStudent, name: e.target.value })
          }
        />
      </div>
      <div className="my-3">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          className="form-control"
          value={tempStudent.age}
          onChange={(e) =>
            setTempStudent({ ...tempStudent, age: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="my-3">
        <label htmlFor="avtar">Image</label>
        <input
          type="text"
          name="avtar"
          id="avtar"
          className="form-control"
          value={tempStudent.avtar}
          onChange={(e) =>
            setTempStudent({ ...tempStudent, avtar: e.target.value })
          }
        />
      </div>
      <div className="my-3">
        <label htmlFor="city">City</label>
        <select
          name="city"
          id="city"
          className="form-select"
          value={tempStudent.city}
          onChange={(e) =>
            setTempStudent({ ...tempStudent, city: e.target.value })
          }
        >
          <option value="surat">Surat</option>
          <option value="mumbai">Mumbai</option>
          <option value="vadodara">Vadodara</option>
          <option value="pune">Pune</option>
        </select>
      </div>
      <input type="submit" className="btn btn-primary" />
    </form>
  );
};

export default Form;
