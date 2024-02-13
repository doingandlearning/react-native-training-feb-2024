import React from "react";
import useMovies from "../hooks/useMovie";

export const MovieContext = React.createContext();

export function MovieProvider({ children }) {
  //   const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { movies, isLoading } = useMovies();

  return (
    <MovieContext.Provider value={{ movies, isLoading }}>
      {children}
    </MovieContext.Provider>
  );
}
