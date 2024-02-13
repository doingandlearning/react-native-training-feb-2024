import React from "react";
import useWeather from "../hooks/useWeather";

export const WeatherContext = React.createContext();

export function WeatherProvider({ children }) {
  const { isLoading, weather, getWeather, history } = useWeather();
  return (
    <WeatherContext.Provider
      value={{ isLoading, getWeather, weather, history }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
