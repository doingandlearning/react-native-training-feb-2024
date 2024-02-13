import React from "react";
import useWeather from "../hooks/useWeather";

export const WeatherContext = React.createContext();

export function WeatherProvider({ children }) {
  const { isLoading, weather } = useWeather();
  return (
    <WeatherContext.Provider value={{ isLoading, weather }}>
      {children}
    </WeatherContext.Provider>
  );
}
