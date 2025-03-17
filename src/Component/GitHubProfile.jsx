import React, { useState } from "react";
import axios from "axios";

function GitHubProfile() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    if (!username) {
      setError("Please enter a GitHub username");
      return;
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError("");
    } catch {
      setError("User not found");
      setUserData(null);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🔍 GitHub Profile Finder</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers} | Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default GitHubProfile;
