import React, { useState } from 'react';

const SurveyForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, employeeId, employeeName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Employee ID:
        <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
      </label>
      <label>
        Employee Name:
        <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
      </label>
      <button type="submit">Start Survey</button>
    </form>
  );
};

export default SurveyForm;