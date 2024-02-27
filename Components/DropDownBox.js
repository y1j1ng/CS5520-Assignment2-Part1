import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SelectList } from "react-native-dropdown-select-list";
import { Color } from "../Helpers/Color";

export default function DropDownBox({ label, setValue, placeholder }) {
  // const [open, setOpen] = useState(false);
  const items = [
    { key: "Walking", value: "Walking" },
    { key: "Running", value: "Running" },
    { key: "Swimming", value: "Swimming" },
    { key: "Weights", value: "Weights" },
    { key: "Yoga", value: "Yoga" },
    { key: "Cycling", value: "Cycling" },
    { key: "Hiking", value: "Hiking" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.selectContainer}>
        <SelectList
          setSelected={(val) => setValue(val)}
          data={items}
          save="value"
          search={false}
          placeholder={placeholder}
          dropdownStyles={styles.dropdown}
          inputStyles={styles.drowdownText}
          dropdownTextStyles={styles.drowdownText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingBottom: 35,
  },
  selectContainer: {
    zIndex: 1000,
    position: "absolute",
    top: 40,
    left: 5,
    right: 5,
  },
  dropdown: {
    backgroundColor: "white",
  },
  drowdownText: {
    color: Color.general,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.general,
    marginTop: 5,
    marginBottom: 10,
  },
});
