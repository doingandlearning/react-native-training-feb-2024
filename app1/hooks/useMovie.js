import React from "react";
export default function useMovies() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://reactnative.dev/movies.json?appKey=087962cdd89caf0b4c7b3db3003db197"
        
        );

      if (!response.ok) {
        throw new Error("Problem with the fetch");
      }

      const data = await response.json();
      setMovies(data.movies);
    } catch (error) {
      console.log(error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return { movies, isLoading };
}
