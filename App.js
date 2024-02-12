import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { createContext, useContext, useState } from "react";
import Start from "./Screens/Start";
import AllActivities from "./Screens/AllActivities";
import AddAnActivity from "./Screens/AddAnActivity";

export const EntriesContext = createContext(null);

export default function App() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [entries, setEntries] = useState([]);
  const [entries, setEntries] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <EntriesContext.Provider value={{ entries, setEntries }}>
        {/* <Start
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <AddAnActivity /> */}
        <AllActivities />
      </EntriesContext.Provider>
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
