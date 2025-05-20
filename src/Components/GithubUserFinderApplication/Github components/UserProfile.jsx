import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser, fetchRepos } from "../api/github";

const UserProfile = ({ username }) => {
    const {
        data: user,
        isLoading: loadingUser,
        error: userError,
      } = useQuery({
        queryKey: ['user', username],
        queryFn: () => fetchUser(username),
        enabled: !!username,
      });
    
      const {
        data: repos,
        isLoading: loadingRepos,
        error: repoError,
      } = useQuery({
        queryKey: ['repos', username],
        queryFn: () => fetchRepos(username),
        enabled: !!username,
      });
    
      if (loadingUser || loadingRepos) return <p>Loading...</p>;
      if (userError || repoError) return <p>Error fetching data.</p>;
  return (
    <>
      <div>
        <img src={user.avatar_url} alt={user.login} />
        <h2>{user.name && user.login}</h2>
        <p>{user.bio}</p>
        <p>👥 {user.followers} followers</p>

        <h3>Public Repositories</h3>
        <ul>
          {repos.map((repo) => {
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default UserProfile;
