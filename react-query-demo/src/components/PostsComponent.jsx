import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
    };

    export default function PostsComponent() {
      const { data, error, isLoading, refetch } = useQuery("posts", fetchPosts);

        if (isLoading) return <p>Loading...</p>;
          if (error) return <p>Error fetching posts</p>;

            return (
                <div>
                      <button
                              onClick={() => refetch()}
                                      className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                                            >
                                                    Refresh Posts
                                                          </button>
                                                                <ul className="space-y-2">
                                                                        {data.slice(0, 10).map((post) => (
                                                                                  <li key={post.id} className="border p-2 rounded">
                                                                                              <strong>{post.title}</strong>
                                                                                                          <p>{post.body}</p>
                                                                                                                    </li>
                                                                                                                            ))}
                                                                                                                                  </ul>
                                                                                                                                      </div>
                                                                                                                                        );
                                                                                                                                        }
                                                                                                                                        