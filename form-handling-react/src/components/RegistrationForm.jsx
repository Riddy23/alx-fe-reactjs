import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
      username: "",
          email: "",
              password: "",
                });
                  const [error, setError] = useState("");

                    const handleChange = (e) => {
                        const { name, value } = e.target;
                            setFormData({ ...formData, [name]: value });
                              };

                                const handleSubmit = (e) => {
                                    e.preventDefault();
                                        if (!formData.username || !formData.email || !formData.password) {
                                              setError("All fields are required!");
                                                    return;
                                                        }
                                                            setError("");
                                                                console.log("Form Submitted:", formData);
                                                                    alert("User registered successfully!");
                                                                      };

                                                                        return (
                                                                            <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
                                                                                  <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                                                                                        {error && <p className="text-red-500 text-center mb-3">{error}</p>}
                                                                                              <form onSubmit={handleSubmit} className="space-y-4">
                                                                                                      <input
                                                                                                                type="text"
                                                                                                                          name="username"
                                                                                                                                    placeholder="Username"
                                                                                                                                              value={formData.username}
                                                                                                                                                        onChange={handleChange}
                                                                                                                                                                  className="w-full border p-2 rounded"
                                                                                                                                                                          />
                                                                                                                                                                                  <input
                                                                                                                                                                                            type="email"
                                                                                                                                                                                                      name="email"
                                                                                                                                                                                                                placeholder="Email"
                                                                                                                                                                                                                          value={formData.email}
                                                                                                                                                                                                                                    onChange={handleChange}
                                                                                                                                                                                                                                              className="w-full border p-2 rounded"
                                                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                                              <input
                                                                                                                                                                                                                                                                        type="password"
                                                                                                                                                                                                                                                                                  name="password"
                                                                                                                                                                                                                                                                                            placeholder="Password"
                                                                                                                                                                                                                                                                                                      value={formData.password}
                                                                                                                                                                                                                                                                                                                onChange={handleChange}
                                                                                                                                                                                                                                                                                                                          className="w-full border p-2 rounded"
                                                                                                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                                                                                                          <button
                                                                                                                                                                                                                                                                                                                                                    type="submit"
                                                                                                                                                                                                                                                                                                                                                              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                                                                                                                                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                                                                                                                                Register
                                                                                                                                                                                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                                                                                                                                                                              </form>
                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                    