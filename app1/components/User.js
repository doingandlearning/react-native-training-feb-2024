import { Text } from "react-native";
import React from "react";

export default function User() {
  const [users, setUsers] = React.useState(null);

  React.useEffect(async () => {
    fetchData();
  }, []);
  // fetch the data

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(
          `Something has gone wrong: ${response.status}, ${response.statusText}`
        );
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
    return "Hello";
  }

  return <Text>{JSON.stringify(users)}</Text>;
}
