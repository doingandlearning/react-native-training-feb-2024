export const getWeather = async (city = "Manchester", country = "UK") => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1&units=metric`
    );

    if (!response.ok) {
      throw new Error("Problem with the fetch");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
