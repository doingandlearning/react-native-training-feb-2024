import { WeatherContext } from "../context/WeatherContext";
import React from "react";
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function Weather() {
  const { isLoading, weather, getWeather, history } =
    React.useContext(WeatherContext);
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  return isLoading ? (
    <ActivityIndicator></ActivityIndicator>
  ) : (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        placeholder="City"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCountry}
        placeholder="Country"
      />
      <Text style={styles.text}>Weather: {weather.weather[0].description}</Text>
      <Text style={styles.text}>Temperature: {weather.main.temp}</Text>
      <Button
        title="Get new weather"
        onPress={() => getWeather({ city, country })}
      />
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <>
            <Text style={styles.textHeading}>{item.name}</Text>
            <Text style={styles.text}>
              Weather: {item.weather[0].description}
            </Text>
            <Text style={styles.text}>Temperature: {item.main.temp}</Text>
          </>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  textHeading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
});
