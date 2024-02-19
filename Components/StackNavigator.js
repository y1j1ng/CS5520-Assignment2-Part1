import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../Components/TabNavigator";
import Start from "../Screens/Start";
import AddAnActivity from "../Screens/AddAnActivity";
import { Color } from "../Helpers/Color";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
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
  );
}
