import { createContext, useState } from "react";
export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});
const FavouritesContextProvider = ({ children }) => {
  const [favouriteMealsId, setfavouriteMealsId] = useState([]);
  const addFavourite = (id) => {
    setfavouriteMealsId((currentfavids) => [...currentfavids, id]);
  };
  const removeFavourite = (id) => {
    setfavouriteMealsId((currentfavids) =>
      currentfavids.filter((mealID) => mealID != id)
    );
  };
  const value = {
    ids: favouriteMealsId,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
export default FavouritesContextProvider;
