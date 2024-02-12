import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import DropDownBox from "../Components/DropDownBox";
import Input from "../Components/Input";
import DatePicker from "../Components/DatePicker";
import StyledButton from "../Components/StyledButton";

export default function AddAnActivity() {
  const [duration, setDuration] = useState("");
  const [activity, setActivity] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const durationAlert = () =>
    Alert.alert(
      "Invalid Duration",
      "No negative number or letters or empty for duration.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );

  const emptySubmissionAlert = () =>
    Alert.alert(
      "Empty Submission",
      "Please complete all the required information.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );

  function validateInputs() {
    console.log(activity);
    console.log(selectedDate);
    // Validate activity
    if (activity.length === 0 || selectedDate == null) {
      emptySubmissionAlert();
    }

    // Validate duration
    if (!/^\d+$/.test(duration)) {
      durationAlert();
    }
  }

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function changeDurationHandler(changedDuration) {
    setDuration(changedDuration);
  }

  return (
    <View>
      <View style={styles.dropDownBox}>
        <DropDownBox
          label="Activity *"
          value={activity}
          setValue={setActivity}
        />
      </View>
      <Input
        label="Duration (min) *"
        value={duration}
        onChangeText={changeDurationHandler}
      />
      <DatePicker onDateChange={handleDateChange} />
      <View style={styles.buttonsContainer}>
        <StyledButton title={"Cancel"} color={"red"} />
        <View style={styles.buttonView}>
          <Button title="Save" onPress={validateInputs} color={"purple"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //justifyContent: "center",
    //   alignItems: "center",
  },
  dropDownBox: {
    zIndex: 1000,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  // buttonView: { margin: 5 },
});
