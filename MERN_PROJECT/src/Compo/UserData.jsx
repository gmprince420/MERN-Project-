import React from "react";
import "./UserData.css";
const UserData = ({ name, phone, email, massage }) => {
  return (
    <div className="main">
      <h3>
        Name: <span>{name}</span>
      </h3>
      <h3>
        Phone Number: <span>{phone} </span>
      </h3>
      <h3>
        Gmail id: <span>{email}</span>
      </h3>
      <h3>
        Massage: <span>{massage}</span>
      </h3>
    </div>
  );
};

export default UserData;
