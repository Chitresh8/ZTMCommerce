import React, { useState } from "react";
import UserProfile from "./UserProfile";

const GithubUserFinder = () => {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitted(username);
  };

  const githubSearchHandler=(e)=>{
    setUsername(e.target.value);
  };

  return (
    <>
      <h1>GitHub User Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={githubSearchHandler}
        />
        <button type="submit">Search</button>
      </form>
      {submitted && <UserProfile username={submitted} />}
    </>
  );
};

export default GithubUserFinder;