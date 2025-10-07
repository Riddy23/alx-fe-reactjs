import { useParams, Link } from "react-router-dom";
import { recipes } from "../data/recipes";

export default function RecipeDetail() {
  const { id } = useParams();
    const recipe = recipes.find((r) => r.id === parseInt(id));

      if (!recipe) {
          return (
                <div className="flex flex-col items-center justify-center h-screen">
                        <h2 className="text-2xl font-semibold text-red-600">
                                  Recipe not found 😢
                                          </h2>
                                                  <Link
                                                            to="/"
                                                                      className="mt-4 text-blue-600 hover:underline font-medium"
                                                                              >
                                                                                        Back to Home
                                                                                                </Link>
                                                                                                      </div>
                                                                                                          );
                                                                                                            }

                                                                                                              return (
                                                                                                                  <div className="min-h-screen bg-gray-100 p-8">
                                                                                                                        <Link to="/" className="text-blue-600 hover:underline font-medium">
                                                                                                                                ← Back to Recipes
                                                                                                                                      </Link>

                                                                                                                                            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md mt-8 overflow-hidden">
                                                                                                                                                    <img
                                                                                                                                                              src={recipe.image}
                                                                                                                                                                        alt={recipe.title}
                                                                                                                                                                                  className="w-full h-64 object-cover"
                                                                                                                                                                                          />
                                                                                                                                                                                                  <div className="p-6">
                                                                                                                                                                                                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                                                                                                                                                                                                        {recipe.title}
                                                                                                                                                                                                                                  </h1>
                                                                                                                                                                                                                                            <p className="text-gray-700 mb-6">{recipe.description}</p>

                                                                                                                                                                                                                                                      <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
                                                                                                                                                                                                                                                                <ul className="list-disc list-inside text-gray-600">
                                                                                                                                                                                                                                                                            <li>Ingredient 1</li>
                                                                                                                                                                                                                                                                                        <li>Ingredient 2</li>
                                                                                                                                                                                                                                                                                                    <li>Ingredient 3</li>
                                                                                                                                                                                                                                                                                                              </ul>
                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                  