import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../Components/TabNavigator";
import Start from "../Screens/Start";
import AddAnActivity from "../Screens/AddAnActivity";
import { Color } from "../Helpers/Color";
import PressableButton from "./PressableButton";
import { Ionicons } from "@expo/vector-icons";
import Edit from "../Screens/Edit";

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
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{
          headerBackTitleVisible: false,
          title: "Edit",
          headerStyle: {
            backgroundColor: Color.general,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <PressableButton
            // onPress={() => navigation.navigate("AddAnActivity")}
            >
              <Ionicons name="trash" size={20} color="white" />
            </PressableButton>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
