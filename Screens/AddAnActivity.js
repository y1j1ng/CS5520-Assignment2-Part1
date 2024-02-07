import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import DropDownBox from "../Components/DropDownBox";

export default function AddAnActivity() {
  return (
    <View>
      <DropDownBox label="Activity *" />
    </View>
  );
}

const styles = StyleSheet.create({});
