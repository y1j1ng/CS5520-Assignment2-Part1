import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDownBox from "../Components/DropDownBox";
import Input from "../Components/Input";
import DatePicker from "../Components/DatePicker";

export default function AddAnActivity() {
  const [duration, setDuration] = useState("");

  function changeDurationHandler(changedDuration) {
    setDuration(changedDuration);
  }

  return (
    <View>
      <DropDownBox label="Activity *" />
      <Input
        label="Duration (min) *"
        value={duration}
        onChangeText={changeDurationHandler}
      />
      <DatePicker />
    </View>
  );
}

const styles = StyleSheet.create({});
