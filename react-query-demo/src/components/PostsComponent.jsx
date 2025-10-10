import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch posts function
const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
    };

    export default function PostsComponent() {
      // Destructure isError instead of error
        const { data, isError, isLoading, refetch, error } = useQuery({
            queryKey: ["posts"],
                queryFn: fetchPosts,
                  });

                    if (isLoading) return <p>Loading...</p>;
                      if (isError) return <p>Error fetching posts: {error.message}</p>;

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
                                                                                                                                                    