import React, { createContext, useReducer } from "react";

const initialState = {
  theme: "light",
  dentists: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "ADD_FAV":
      const updatedFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload);
      localStorage.setItem("favs", JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };
    case "CLEAR_FAVS":
      localStorage.removeItem("favs");
      return { ...state, favs: [] };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};