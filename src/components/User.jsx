import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import UserData from "./UserData";
import UserForm from "./UserForm";
import UserItem from "./UserItem";

const User = () => {
  const [user, setUser] = useState({
    id: uuidv4(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [users, setUsers] = useState([]);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "Plase save your changes before leaving!";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setIsDirty(true);
  };

  const handleSave = () => {
    if (!user.name || !user.email || !user.address || !user.phone) {
      return alert("Please enter input fields");
    }
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser({
      id: uuidv4(),
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    setIsDirty(false); 
  };

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 my-10">
        <UserData
          name={user.name}
          id={user.id}
          handleChange={handleChange}
          handleSave={handleSave}
          users={users}
        />
        <UserForm
          address={user.address}
          email={user.email}
          phone={user.phone}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      </div>
      <ul>
        {users.map((user) => (
          <UserItem userDetails={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default User;
