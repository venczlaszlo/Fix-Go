import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Regisztrált Felhasználók</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.vezeteknev} {user.keresztnev} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
