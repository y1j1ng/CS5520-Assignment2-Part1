import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Color } from "./Helpers/Color";
import StackNavigator from "./Components/StackNavigator";
import { EntriesContext } from "./Components/EntriesContext";

export default function App() {
  const [entries, setEntries] = useState([]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <EntriesContext.Provider value={{ entries, setEntries }}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </EntriesContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center",
    backgroundColor: Color.background,
    ...StyleSheet.absoluteFillObject,
    height: null,
  },
});
