import { TextInput } from "react-native";

export default function InputField({ setField, placeholder }) {
  return (
    <TextInput
      onChangeText={setField}
      placeholder={placeholder}
      style={{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 150,
      }}
    />
  );
}
