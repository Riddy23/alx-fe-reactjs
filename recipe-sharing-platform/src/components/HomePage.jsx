import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json"; // load from data.json

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Simulate fetching data from a static JSON file
            setRecipes(recipesData);
              }, []);

                return (
                    <div className="min-h-screen bg-gray-100 p-8">
                          <div className="flex justify-between items-center mb-8">
                                  <h1 className="text-4xl font-bold text-green-600">
                                            🍳 Recipe Sharing Platform
                                                    </h1>
                                                            <Link
                                                                      to="/add"
                                                                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                                                                        >
                                                                                                  ➕ Add Recipe
                                                                                                          </Link>
                                                                                                                </div>

                                                                                                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                                                                                              {recipes.map((recipe) => (
                                                                                                                                        <Link
                                                                                                                                                    to={`/recipe/${recipe.id}`}
                                                                                                                                                                key={recipe.id}
                                                                                                                                                                            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
                                                                                                                                                                                      >
                                                                                                                                                                                                  <img
                                                                                                                                                                                                                src={recipe.image}
                                                                                                                                                                                                                              alt={recipe.title}
                                                                                                                                                                                                                                            className="w-full h-48 object-cover"
                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                    <div className="p-4">
                                                                                                                                                                                                                                                                                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                                                                                                                                                                                                                                                                                  {recipe.title}
                                                                                                                                                                                                                                                                                                                </h2>
                                                                                                                                                                                                                                                                                                                              <p className="text-gray-600">{recipe.summary}</p>
                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                    </Link>
                                                                                                                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                        