import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createContext, useContext, useState } from "react";
import Start from "./Screens/Start";
import AddAnActivity from "./Screens/AddAnActivity";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Color } from "./Helpers/Color";
import TabNavigator from "./Components/TabNavigator";

export const EntriesContext = createContext(null);
const Stack = createNativeStackNavigator();

export default function App() {
  const [entries, setEntries] = useState([]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <EntriesContext.Provider value={{ entries, setEntries }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: Color.background },
            }}
          >
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddAnActivity"
              component={AddAnActivity}
              options={{
                headerBackTitleVisible: false,
                title: "Add An Activity",
                headerStyle: {
                  backgroundColor: Color.general,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
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
