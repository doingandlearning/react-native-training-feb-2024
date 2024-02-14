import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  Button,
} from "react-native";
import React from "react";
import InputField from "./InputField";
import { Picker } from "@react-native-picker/picker";

export default function Form() {
  const [name, setName] = React.useState("");
  const [isActive, setIsActive] = React.useState(true);
  const [favCookie, setFavCookie] = React.useState("");
  const [error, setError] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const cookieOptions = [
    "Belgian Choc",
    "Golden Oat",
    "Salted Caramel",
    "Stem Ginger",
  ];

  async function handleSubmit() {
    console.log(name, isActive, favCookie);
    setError("");
    const currentData = users;
    setUsers([...users, { name, isActive, favCookie }]);
    if (name === "" || favCookie === "") {
      setUsers(currentData);
      setError("Make sure you select your name and cookie");
      return;
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        isActive,
        favCookie,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  // Group together
  return (
    <KeyboardAvoidingView>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <InputField setField={setName} placeholder="Enter your name" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Are you active?</Text>
        <Switch
          value={isActive}
          thumbColor={isActive ? "#f5dd4b" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsActive(!isActive)}
        />
      </View>
      <Picker
        selectedValue={favCookie}
        onValueChange={(cookie) => setFavCookie(cookie)}
      >
        <Picker.Item label="Select your cookie" />
        {cookieOptions.map((cookie) => (
          <Picker.Item label={cookie} value={cookie} key={cookie} />
        ))}
      </Picker>
      <Button title="Submit" onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
}
