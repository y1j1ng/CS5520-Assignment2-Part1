import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState, useContext } from "react";
import DropDownBox from "../Components/DropDownBox";
import Input from "../Components/Input";
import DatePicker from "../Components/DatePicker";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import { EntriesContext } from "../Components/EntriesContext";
import PressableButton from "../Components/PressableButton";
import { Color, buttonText } from "../Helpers/Color";

export default function AddAnActivity() {
  const [duration, setDuration] = useState("");
  const [activity, setActivity] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const { entries, setEntries } = useContext(EntriesContext);
  const navigation = useNavigation(); // Access the navigation object using useNavigation hook

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

  function updateEntries() {
    const isSpecial =
      (activity === "Running" || activity === "Weights") &&
      parseInt(duration) > 60;
    const newEntry = {
      id: Math.random(),
      activity: activity,
      duration: parseInt(duration),
      date: selectedDate,
      special: isSpecial, // Add special flag
    };
    setEntries(() => [...entries, newEntry]);
  }

  function validateInputs() {
    // Validate activity and date
    const isActivityDateEmpty = activity.length === 0 || selectedDate == null;
    if (isActivityDateEmpty) {
      emptySubmissionAlert();
    }

    // Validate duration
    const isDurationValid = /^\d+$/.test(duration); // if true, means duration is non-negative number
    if (!isDurationValid) {
      durationAlert();
    }

    if (!isActivityDateEmpty && isDurationValid) {
      updateEntries();
      // Navigate back to the previous screen
      navigation.goBack();
    }
  }

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function changeDurationHandler(changedDuration) {
    setDuration(changedDuration);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View style={styles.dropDownBox}>
          <DropDownBox label="Activity *" setValue={setActivity} />
        </View>
        <Input
          label="Duration (min) *"
          value={duration}
          onChangeText={changeDurationHandler}
        />
        <DatePicker onDateChange={handleDateChange} />
      </View>

      <View style={styles.buttonsContainer}>
        <PressableButton
          backgroundColor="red"
          onPress={() => navigation.goBack()}
        >
          <Text style={buttonText}>Cancel</Text>
        </PressableButton>
        <PressableButton
          backgroundColor={Color.general}
          onPress={validateInputs}
        >
          <Text style={buttonText}>Save</Text>
        </PressableButton>
        {/* <StyledButton
          title={"Cancel"}
          onPress={() => navigation.goBack()}
          color={"red"}
        />
        <View style={styles.buttonView}>
          <Button title="Save" onPress={validateInputs} color={"purple"} />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //   alignItems: "center",
    paddingTop: 20,
  },
  inputsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dropDownBox: {
    zIndex: 1000,
    marginBottom: 20,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 500,
  },
  // buttonView: { margin: 5 },
});
