// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

          async function handleSubmit(e) {
              e.preventDefault();
                  setUser(null);
                      setError(null);
                          if (!username.trim()) return;
                              setLoading(true);
                                  try {
                                        const data = await fetchUserData(username.trim());
                                              setUser(data);
                                                  } catch (err) {
                                                        setError("Looks like we cant find the user");
                                                            } finally {
                                                                  setLoading(false);
                                                                      }
                                                                        }

                                                                          return (
                                                                              <div className="max-w-xl mx-auto p-4">
                                                                                    <form onSubmit={handleSubmit} className="mb-4">
                                                                                            <input
                                                                                                      value={username}
                                                                                                                onChange={(e) => setUsername(e.target.value)}
                                                                                                                          placeholder="Enter GitHub username"
                                                                                                                                    className="px-3 py-2 border rounded mr-2"
                                                                                                                                            />
                                                                                                                                                    <button type="submit" className="px-4 py-2 border rounded">Search</button>
                                                                                                                                                          </form>

                                                                                                                                                                {loading && <div>Loading...</div>}
                                                                                                                                                                      {error && <div className="text-red-600">{error}</div>}

                                                                                                                                                                            {user && (
                                                                                                                                                                                    <div className="mt-4 flex items-center gap-4">
                                                                                                                                                                                              <img src={user.avatar_url} alt="avatar" width="80" height="80" className="rounded" />
                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                    <div className="font-bold">{user.name || user.login}</div>
                                                                                                                                                                                                                                <div>Bio: {user.bio || "—"}</div>
                                                                                                                                                                                                                                            <div>Public repos: {user.public_repos}</div>
                                                                                                                                                                                                                                                        <a href={user.html_url} target="_blank" rel="noreferrer" className="underline">Open GitHub profile</a>
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                      