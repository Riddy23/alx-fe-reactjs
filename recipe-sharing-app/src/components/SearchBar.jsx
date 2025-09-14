import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

    return (
        <input
              type="text"
                    placeholder="Search recipes..."
                          onChange={(event) => setSearchTerm(event.target.value)}
                                style={{ margin: '10px', padding: '5px', width: '200px' }}
                                    />
                                      );
                                      };

                                      export default SearchBar;
                                      