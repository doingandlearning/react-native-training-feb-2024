export const getWeather = async () => {
  try {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Manchester,UK&APPID=48f2d5e18b0d2bc50519b58cce6409f1&units=metric"
    );

    if (!response.ok) {
      throw new Error("Problem with the fetch");
    }

    const data = await response.json();
    setWeather(data);
  } catch (error) {
    console.log(error);
    setMovies([]);
  } finally {
    setIsLoading(false);
  }
};
