import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "./RepoCard";
import Footer from "./Footer";

export default function Home() {
  const [repos, setRepo] = useState([]);

  const getGitUsers = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=XXX"
    );
    setRepo(response.data.items);
    return response.data.items;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);

  return (
    <>
      <div className="con">
        {repos.map((repo) => {
          return (
            <RepoCard
              name={repo.name}
              ownerName={repo.owner.login}
              language={repo.language}
              key={repo.id}
              image={repo.owner.avatar_url}
              url={repo.html_url}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
