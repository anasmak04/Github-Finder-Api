import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./github.css"
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
    <div class="container ">
      <form onSubmit={FromEvent}>
        <div class="input-group mb-3">
          <input
            onChange={input}
            type="text"
            class="form-control"
            placeholder="Enter github usename"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </form>

      <pre>username : {item.name}</pre>
      <pre>picture : {item.avatar_url}</pre>
      <pre>picture : {item.url}</pre>
      <pre>company : {item.company}</pre>
      <pre>followers : {item.followers}</pre>
      <pre>following : {item.following}</pre>
      <pre>public_repos : {item.public_repos}</pre>
    </div>
  );
}
