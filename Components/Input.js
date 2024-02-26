import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Color } from "../Helpers/Color";

export default function Input({
  label,
  value,
  onChangeText,
  onPressIn,
  error,
}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onPressIn={onPressIn}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.general,
    margin: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  input: {
    fontSize: 20,
    color: "purple",
    borderWidth: 2,
    borderColor: Color.general,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  // errorText: {
  //   color: Color.text,
  //   margin: 3,
  // },
});
