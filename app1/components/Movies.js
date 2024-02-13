import { Text, ActivityIndicator, FlatList, StyleSheet } from "react-native";
import React from "react";
import { MovieContext } from "../context/MovieContext";

export default function Movies() {
  const { isLoading, movies } = React.useContext(MovieContext);
  return isLoading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <Text style={styles.item}>
          {item.title}, {item.releaseYear}
        </Text>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  item: {
    backgroundColor: "aliceblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
