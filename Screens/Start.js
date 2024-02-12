import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import Input from "../Components/Input";
import StyledButton from "../Components/StyledButton";

export default function Start({ navigation }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    // Check if both email and phone number fields are empty
    setIsEntered(email || phoneNumber ? true : false);
  }, [email, phoneNumber]);

  function changeEmailHandler(changedEmail) {
    setEmail(changedEmail);
    setEmailError(""); // Clear error when email changes
  }

  function changePhoneNumberHandler(changedPhoneNumber) {
    setPhoneNumber(changedPhoneNumber);
    setPhoneNumberError(""); // Clear error when phone number changes
  }

  function validateInputs() {
    // Validate name
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      setEmailError("Please enter a valid email address");
    }

    // Validate phone number
    const isPhoneNumberValid = /^[0-9]{10}$/.test(phoneNumber);
    if (!isPhoneNumberValid) {
      setPhoneNumberError("Please enter a valid phone number");
    }

    // Check if both inputs are valid
    if (isEmailValid && isPhoneNumberValid) {
      startHandler();
    }
  }

  // After validate inputs, navigate to AllActivities
  function startHandler() {
    navigation.navigate("TabNavigator");
  }

  function resetHandler() {
    setEmail("");
    setPhoneNumber("");
    setEmailError("");
    setPhoneNumberError("");
    setIsEntered(false);
  }

  return (
    <View style={styles.container}>
      <Input
        label="Email Address"
        value={email}
        onChangeText={changeEmailHandler}
        error={emailError}
      />
      <Input
        label="Phone Number"
        value={phoneNumber}
        onChangeText={changePhoneNumberHandler}
        error={phoneNumberError}
      />

      <View style={styles.buttonsContainer}>
        <StyledButton title={"Reset"} onPress={resetHandler} color={"red"} />
        <View style={styles.buttonView}>
          <Button
            title="Start"
            onPress={validateInputs}
            color={isEntered ? "purple" : "white"}
            disabled={!isEntered}
          />
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  // buttonView: { margin: 5 },
});
