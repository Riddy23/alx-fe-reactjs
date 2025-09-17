// src/services/githubService.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
    timeout: 10000,
    });

    function authHeaders() {
      const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
        return token ? { Authorization: `token ${token}` } : {};
        }

        /**
         * Fetch a single user's full profile
          * GET /users/{username}
           */
           export async function fetchUserData(username) {
             if (!username) throw new Error("username required");
               const res = await api.get(`/users/${encodeURIComponent(username)}`, {
                   headers: authHeaders(),
                     });
                       return res.data;
                       }

                       /**
                        * Search users by constructed query (used in advanced search)
                         * GET /search/users?q=...
                          */
                          export async function searchUsers(query, page = 1, per_page = 30) {
                            // `query` must be a prebuilt string, e.g. "john location:Zimbabwe repos:>10"
                              const res = await api.get(`/search/users`, {
                                  params: { q: query, page, per_page },
                                      headers: authHeaders(),
                                        });
                                          return res.data; // contains { total_count, incomplete_results, items: [...] }
                                          }
                                          
                                          