import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { convertDateToString } from "../Helpers/Helper";

export default function DatePicker({ onDateChange }) {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  function onPressInHandler() {
    setShow(true);
  }

  const onChange = (e, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
    convertDateToString(selectedDate);
    onDateChange(selectedDate);
  };

  return (
    <View>
      <Input
        label="Date *"
        value={date ? convertDateToString(date) : ""} // Use conditional rendering to show the date string if date is not null
        onPressIn={onPressInHandler}
      />
      {show && (
        <DateTimePicker
          value={date || new Date()} // Pass null or current date to DateTimePicker
          mode="date"
          display="inline"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
