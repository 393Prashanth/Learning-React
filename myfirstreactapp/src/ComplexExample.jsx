import React, { useState } from 'react';

const ComplexExample = () => {
  // Define state with an object
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: ''
  });

  const handleChange = (e) => {
    // Destructure event object
    debugger
    const { name, value } = e.target;
    // Update state by spreading previous state and updating specific property
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input type="number" name="age" value={user.age} onChange={handleChange} placeholder="Age" />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
    </div>
  );
};

export default ComplexExample;
