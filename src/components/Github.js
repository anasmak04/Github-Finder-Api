import React, { useState } from "react";

export default function Github() {
  const [username, setUsername] = useState("");
  const [item, setItem] = useState([]);

  const api = `https://api.github.com/users/${username}`;

  const FromEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(api);
      const data = await response.json();
      setItem(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const input = (e) => setUsername(e.target.value);
  return (
    <div>
      <form onSubmit={FromEvent}>
        <label>Enter github usename</label>
        <input onChange={input} type="text"></input>
        <button>submit</button>
      </form>

      <h1>username : {item.name}</h1>
      <h1>picture : {item.avatar_url}</h1>
      <h1>picture : {item.url}</h1>
      <h1>picture : {item.company}</h1>
      <h1>picture : {item.followers}</h1>
      <h1>picture : {item.following}</h1>
      <h1>picture : {item.public_repos}</h1>
    </div>
  );
}
