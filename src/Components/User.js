import React from 'react'

const User = ({user}) => {
    return (
      <div>
        <div class="container">
          <div class="front side">
            <div class="content">
              <h1>{user.name}</h1>
              <h3>username:{user.username}</h3>
              <h3>E-mail:{user.email}</h3>
            </div>
          </div>
          <div class="back side">
            <div class="content">
              <h1>Adress</h1>
              <h4>Street:  {user.address.street}</h4>
              <h4> Suite:  {user.address.suite}</h4>
              <h4> City:  {user.address.city}</h4>
              <h4>ZipCode:  {user.address.zipcode}</h4>
            </div>
          </div>
        </div>
      </div>
    );
}

export default User
