API_KEY = 087962cdd89caf0b4c7b3db3003db197
https://api.openweathermap.org/data/3.0/onecall?q=Manchester&appid=087962cdd89caf0b4c7b3db3003db197

**React Native Review Exercise 2**

Begin a new React Native app and import react-navigation into it (plus other dependencies).

**Task 1: Create a Weather Screen**

1. Provide a screen where the user can enter 'city' and 'country' values.
2. Also provide a button on the same screen.
3. Touching the button should invoke a service which makes a call to OpenWeatherMap (using fetch). The URL will look like this:

```js
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`;
```

http://api.openweathermap.org/data/2.5/weather?q=Manchester,UK&APPID=48f2d5e18b0d2bc50519b58cce6409f1

4. When the JSON is returned, populate a data model with properties such as the weather description and temperature.
5. Show the description and temperature on the screen.
6. Apply some style to your component via `stylesheet.create()`.

<!-- **Task 2: Persist Weather Data**

1. For each successful API call, append the weather results to an array.
2. Use AsyncStorage or SecureStore to persist this array. This way, the historical weather data will be available even if the app is closed and reopened. -->

**Task 3: Add Error Handling**

1. Add error handling to the API call. Display a message if the API call fails, or if the user enters a city or country that doesn't exist.

**Task 4: Add More Weather Data**

1. Display more weather data, such as humidity, pressure, or sunrise and sunset times.

**If Time Allows:**

1. Explore the TextInput component to make it more dynamic

1. Store the weather data in a SQLite database.
1. Add a second screen to show the description and temperature. In the event that weather data is obtained, automatically navigate to this new screen, and provide a

navigation route back to the first screen.

**Optional:**

1. Show the wind speed and direction (and other weather info as you see fit).
2. For each request, append the weather results to an array.
3. Show this historical array as a flatlist in a new view if the user chooses to navigate to it.
4. Touching a data member in this view should navigate back to the first view, and should put the city and country values into the fields. Thus the user can easily make a fresh call for the latest weather.

---

This exercise will help you understand the concepts of APIs and data and persisting data in React Native. Remember to use the React Native inspector for debugging your styles and layouts. Good luck!

---

Here are some helpful code examples.

A fetch example:

```js
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};
```
