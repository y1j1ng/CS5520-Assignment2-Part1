import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import DropDownBox from "../Components/DropDownBox";
import Input from "../Components/Input";
import DatePicker from "../Components/DatePicker";
import StyledButton from "../Components/StyledButton";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import { EntriesContext } from "../Components/EntriesContext";
import PressableButton from "../Components/PressableButton";
import { Color, buttonText } from "../Helpers/Color";
import { db } from "../firebase-files/firebaseSetup";
import { writeToDB } from "../firebase-files/firestoreHelper";
import Checkbox from "expo-checkbox";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export default function AddAnActivity({ isEdit, id }) {
  useEffect(() => {
    if (isEdit) {
      const getActivity = async () => {
        try {
          console.log(id);
          const docRef = doc(db, "activities", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setActivity(data.activity);
            setDuration(data.duration.toString());
            setSelectedDate(data.date.toDate());
            setIsSpecial(data.special);
          } else {
            console.log("Document does not exist.");
          }
        } catch (err) {
          console.error("Error getting document:", err);
        }
      };
      getActivity();
    }
  }, [isEdit, id]);

  const [duration, setDuration] = useState("");
  const [activity, setActivity] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  // const { entries, setEntries } = useContext(EntriesContext);
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

  async function updateEntry() {
    try {
      const docRef = doc(db, "activities", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          activity: activity,
          duration: parseInt(duration),
          date: selectedDate,
          special: isChecked
            ? false
            : (activity === "Running" || activity === "Weights") &&
              parseInt(duration) > 60,
        });
      } else {
        console.log("Document does not exist.");
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
  }

  function writeNewEntry() {
    const isSpecial =
      (activity === "Running" || activity === "Weights") &&
      parseInt(duration) > 60;
    // Set the state of isSpecial
    setIsSpecial(isSpecial);

    const newEntry = {
      activity: activity,
      duration: parseInt(duration),
      date: selectedDate,
      special: isSpecial, // Add special flag
    };
    writeToDB(newEntry);
  }

  function saveHandler() {
    if (isEdit) {
      Alert.alert("Important", "Are you sure you want to save these changes?", [
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "cancel",
        },
        { text: "Yes", onPress: () => validateInputs() },
      ]);
    } else {
      validateInputs();
    }
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
      if (isEdit) {
        // if (isChecked) {
        //   setIsSpecial(false);
        //   console.log("isSpecial after setIsSpecial(false):", isSpecial); // Add this line to check the value of isSpecial
        //   // setChecked back to false before go back, no matter it is selected or not
        //   setChecked(false);
        // }
        updateEntry();
      } else {
        writeNewEntry();
      }
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
          <DropDownBox
            label="Activity *"
            setValue={setActivity}
            placeholder={isEdit ? activity : "Select An Activity"}
          />
        </View>
        <Input
          label="Duration (min) *"
          value={duration}
          onChangeText={changeDurationHandler}
        />
        <DatePicker onDateChange={handleDateChange} />
      </View>

      <View style={styles.downside}>
        {isSpecial && (
          <View style={styles.checkboxContainer}>
            <Text style={styles.text}>
              This item is marked as special. Select the checkbox if you would
              like to approve it.
            </Text>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
          </View>
        )}
        <View style={styles.buttonsContainer}>
          <PressableButton
            backgroundColor="red"
            onPress={() => navigation.goBack()}
          >
            <Text style={buttonText}>Cancel</Text>
          </PressableButton>
          <PressableButton
            backgroundColor={Color.general}
            onPress={saveHandler}
          >
            <Text style={buttonText}>Save</Text>
          </PressableButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //   alignItems: "center",
    paddingTop: 30,
  },
  inputsContainer: {
    flex: 3 / 5,
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
    // marginTop: 500,
  },
  downside: {
    flex: 1 / 5,
    flexDirection: "column",
  },
  checkboxContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  checkbox: {
    marginHorizontal: 5,
  },
  text: {
    color: Color.general,
    fontWeight: "bold",
    // margin: 5,
    width: "90%",
  },
});
