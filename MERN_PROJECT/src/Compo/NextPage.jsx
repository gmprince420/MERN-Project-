import React, { useEffect, useState } from "react";
import UserData from "./UserData";

const NextPage = () => {

  const [users, setusers] = useState([])

  const getdata = async () => {
    const res = await fetch("http://localhost:3020/api/getdata", {
      headers: {
        "Content-Type": "applicaton-json",
      },
    });
    const data = await res.json();
    setusers(data.Users)
    console.log(data.Users);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      {
        users.map((val) => {
          return <UserData key={val._id}  {...val}/>
        })
      }
    </div>
  );
};

export default NextPage;
