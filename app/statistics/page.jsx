'use client'
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')  // Corrected URL to point to the API route
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch users: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Catalog</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.emailAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
