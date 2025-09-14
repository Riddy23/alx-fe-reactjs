import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
    searchTerm: '',
      filteredRecipes: [],
        addRecipe: (newRecipe) =>
            set((state) => ({ recipes: [...state.recipes, newRecipe] })),
              deleteRecipe: (id) =>
                  set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
                    updateRecipe: (id, updatedRecipe) =>
                        set((state) => ({
                              recipes: state.recipes.map((r) =>
                                      r.id === id ? { ...r, ...updatedRecipe } : r
                                            ),
                                                })),
                                                  setRecipes: (recipes) => set({ recipes }),
                                                    setSearchTerm: (term) =>
                                                        set((state) => {
                                                              const filtered = state.recipes.filter((recipe) =>
                                                                      recipe.title.toLowerCase().includes(term.toLowerCase())
                                                                            );
                                                                                  return { searchTerm: term, filteredRecipes: filtered };
                                                                                      }),
                                                                                      }));
                                                                                      