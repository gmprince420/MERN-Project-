import React, { useState } from "react";
import "./Home.css";

const User = () => {
  const [name, setName] = useState("");
  const [phone, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setmassage] = useState("");

  async function Userdata(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:3020/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        massage,
      }),
    });
    const data = await res.json();
    console.log(data);
    alert(data.massage);
    setName("")
    setTel("")
    setEmail("")
    setmassage("")

  }

  return (
    <div className="Home">
      <form action="/" onSubmit={Userdata}>
        <div className="input">
          <label htmlFor="name">Enter Your FullName: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="Number">Enter Your Number: </label>
          <input
            type="tel"
            name="Number"
            id="Number"
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="EmailId">Enter Your Gmail-Id: </label>
          <input
            type="email"
            name="Emailid"
            id="EmailId"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="massage">Massage</label>
          <textarea
            name="massage"
            id="massage"
            cols="30"
            rows="10"
            onChange={(e) => setmassage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" id="btn" onClick={Userdata}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default User;
