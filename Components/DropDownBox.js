import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDownBox({ label, value, setValue }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    "Walking",
    "Running",
    "Swimming",
    "Weights",
    "Yoga",
    "Cycling",
    "Hiking",
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items.map((item) => ({ label: item, value: item }))}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="LIGHT"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
    margin: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
