// http://api.openweathermap.org/data/2.5/weather?q=Manchester,UK&APPID=48f2d5e18b0d2bc50519b58cce6409f1

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useWeather() {
  const [weather, setWeather] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [history, setHistory] = React.useState([]);

  const getWeather = async ({ city = "Manchester", country = "UK" }) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1&units=metric`
      );

      if (!response.ok) {
        throw new Error("Problem with the fetch");
      }

      const data = await response.json();
      setWeather(data);
      setHistory([...history, data]);
    } catch (error) {
      console.log(error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };
  async function getAndSetHistory() {
    // const storedPassword = await SecureStore.getItemAsync("rn-password");
    const weatherHistory = await AsyncStorage.getItem("rn-weather");
    if (!weatherHistory) return;
    setHistory(JSON.parse(storedPassword));
  }

  React.useEffect(() => {
    getAndSetHistory();
  }, []);

  React.useEffect(() => {
    AsyncStorage.setItem("rn-weather", JSON.stringify(history));
  }, [history]);

  React.useEffect(() => {
    getWeather({ city: "Manchester", country: "UK" });
  }, []);

  return { weather, isLoading, getWeather, history };
}
