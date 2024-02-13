import { Text } from "react-native";

export default function User() {
  // fetch the data

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return "Hello";
  }
  return <Text>I'm here</Text>;
}
