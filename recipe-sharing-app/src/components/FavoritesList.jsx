import { useRecipeStore } from '../recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
    const favorites = useRecipeStore((state) =>
        state.favorites.map((id) => recipes.find((r) => r.id === id))
          );

            return (
                <div>
                      <h2>My Favorites</h2>
                            {favorites.length === 0 && <p>No favorite recipes yet.</p>}
                                  {favorites.map(
                                          (recipe) =>
                                                    recipe && (
                                                                <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
                                                                              <h3>{recipe.title}</h3>
                                                                                            <p>{recipe.description}</p>
                                                                                                        </div>
                                                                                                                  )
                                                                                                                        )}
                                                                                                                            </div>
                                                                                                                              );
                                                                                                                              };

                                                                                                                              export default FavoritesList;
                                                                                                                              