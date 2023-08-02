import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    //fetch the username from localstorage after successfull login
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="container">
      <p>
        Hello <b>{userName}</b>!
      </p>
      <p>Welcome to our happy home! 🌟</p>
      <p>
        This is a place where you matter, and we want you to feel amazing just
        by being here.
      </p>
      <p>Explore, smile, and know that you're awesome!</p>
      <p>Spread the happiness and enjoy your stay!</p>

      <p>With joy and positivity,</p>
      <p>Md Arif 😄</p>
    </div>
  );
};

export default Home;
