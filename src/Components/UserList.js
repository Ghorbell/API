import axios from 'axios';
import React, { useEffect, useState } from 'react'
import User from './User';

const UserList = () => {
    const [users, setUsers] = useState([])
     useEffect(() => {
         async function getInfo(){
             try {
              const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
              );
              setUsers(response.data)
             } catch (error) {}
         }
         getInfo();
     }, []);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {users.map((el) => (
          <User user={el} />
        ))}
      </div>
    );
}

export default UserList
