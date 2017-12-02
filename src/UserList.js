import React from "react";

const UserList= ({users, deleteUser})=> {
  console.log("here are ", users);

  return(
    <div>
      <p>Hello</p>
      <div className="">
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Age
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
         { users.map((user) => { return(
           <tr key={user.id}>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td><a href="#" onClick={() =>{
                deleteUser(user.id);
              }}>Delete</a></td>
            </tr>
          );
        })}
        </tbody>
     </table>
   </div>
  </div>
  );
}


export default UserList;
