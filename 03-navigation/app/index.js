import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import { Link, router, Stack } from "expo-router";
import React from "react";

export default function Index() {
  const [subject, setSubject] = React.useState("");
  const [school, setSchool] = React.useState("");
  return (
    <View>
      {/* <Stack.Screen options={{ headerShown: false }} /> */}
      <Text>The index page!</Text>
      <Link href="/about" asChild>
        <Button title="About" />
      </Link>
      <Link href="/science/physics" asChild>
        <Button title="Physics" />
      </Link>
      <Link href="/humanities/politics/modern/middle-east" asChild>
        <Button title="Politics" />
      </Link>

      <TextInput style={styles.input} onChangeText={setSubject} />
      <TextInput style={styles.input} onChangeText={setSchool} />

      <Button
        title="Go!"
        onPress={() => router.replace(`/${school}/${subject}`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
  container: {},
});
