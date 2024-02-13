import { WeatherContext } from "../context/WeatherContext";
import React from "react";
import { ActivityIndicator, Text, StyleSheet } from "react-native";

export default function Weather() {
  const { isLoading, weather } = React.useContext(WeatherContext);

  return isLoading ? (
    <ActivityIndicator></ActivityIndicator>
  ) : (
    <>
      <Text style={styles.text}>Weather: {weather.weather[0].description}</Text>
      <Text style={styles.text}>Temperature: {weather.main.temp}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
