import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import Start from "./Screens/Start";
import AllActivities from "./Screens/AllActivities";
import AddAnActivity from "./Screens/AddAnActivity";

export default function App() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" />
      <Start
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      /> */}
      <AddAnActivity />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center",
    backgroundColor: "lavender",
  },
});
