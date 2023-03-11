import React, { useState } from 'react';

const InformationCreateForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email
    };
    await onSubmit(formData);
  };

  const handleNext = () => {
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleNext}>Next</button>
    </form>
  );
};

export default InformationCreateForm;
