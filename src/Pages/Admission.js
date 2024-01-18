import React, { useState } from "react";
import { customFetch } from "../Utils";
import "./Admission.css";

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    classID: 0,
    contactNumber: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    parentName: "",
    parentContact: "",
    marks: {
      Hindi: 0,
      English: 0,
      Mathematics: 0,
      Science: 0,
    },
    image:
      "https://cdn5.vectorstock.com/i/1000x1000/49/49/student-graduated-avatar-isolated-vector-11224949.jpg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await customFetch.post("/student", formData);
      alert("Admission form submitted successfully!");
      setFormData({
        name: "",
        age: 0,
        classID: 0,
        contactNumber: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        parentName: "",
        parentContact: "",
        marks: {
          Hindi: 0,
          English: 0,
          Mathematics: 0,
          Science: 0,
        },
        image:
          "https://cdn5.vectorstock.com/i/1000x1000/49/49/student-graduated-avatar-isolated-vector-11224949.jpg",
      });
    } catch (error) {
      alert("Error submitting admission form:", error.message);
    }
  };

  return (
    <div>
      <h1>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="classID">Class:</label>
          <input
            type="number"
            id="classID"
            name="classID"
            value={formData.classID}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="number"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="parentName">Parent Name:</label>
          <input
            type="text"
            id="parentName"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="parentContact">Parent Contact:</label>
          <input
            type="number"
            id="parentContact"
            name="parentContact"
            value={formData.parentContact}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admission;
