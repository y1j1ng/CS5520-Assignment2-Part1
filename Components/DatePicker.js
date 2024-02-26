import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "./Input";
import { convertDateToString } from "../Helpers/Helper";

export default function DatePicker({ onDateChange }) {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  function onPressInHandler() {
    setShow(!show); // Toggle the visibility of the DateTimePicker
    if (!show) {
      setDate(new Date());
    }
    onDateChange(date);
  }

  const onChange = (e, selectedDate) => {
    setShow(false);
    setDate(selectedDate);
    selectedDate.toDateString();
    onDateChange(selectedDate);
  };

  return (
    <View>
      <Input
        label="Date *"
        value={date ? date.toDateString() : ""} // Use conditional rendering to show the date string if date is not null
        onPressIn={onPressInHandler}
      />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="inline"
          onChange={onChange}
        />
      )}
    </View>
  );
}
