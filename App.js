import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { createContext, useContext, useState } from "react";
import Start from "./Screens/Start";
import AllActivities from "./Screens/AllActivities";
import AddAnActivity from "./Screens/AddAnActivity";
import SpecialActivities from "./Screens/SpecialActivities";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const EntriesContext = createContext(null);
const Stack = createNativeStackNavigator();

export default function App() {
  const [entries, setEntries] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <EntriesContext.Provider value={{ entries, setEntries }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="AddAnActivity" component={AddAnActivity} />
            <Stack.Screen name="AllActivities" component={AllActivities} />
            <Stack.Screen
              name="SpecialActivities"
              component={SpecialActivities}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
