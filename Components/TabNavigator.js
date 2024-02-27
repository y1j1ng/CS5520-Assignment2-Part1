import React from "react";
// import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Color } from "../Helpers/Color";
import AllActivities from "../Screens/AllActivities";
import SpecialActivities from "../Screens/SpecialActivities";
import { Button } from "react-native";
import PressableButton from "./PressableButton";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  // const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          if (route.name === "All Activities") {
            return <FontAwesome name="dollar" size={size} color={color} />;
          } else if (route.name === "Special Activities") {
            return <AntDesign name="exclamation" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: Color.general,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: { backgroundColor: Color.general },
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate("AddAnActivity")}
            style={{ margin: 10 }}
          >
            <AntDesign name="plus" size={20} color="white" />
          </Pressable>
          // <Button
          //   onPress={() => navigation.navigate("AddAnActivity")}
          //   title="+"
          //   color="white"
          // />
        ),
      })}
    >
      <Tab.Screen
        name="All Activities"
        component={AllActivities}
        options={{
          headerTitle: "All Activities",
        }}
      />
      <Tab.Screen
        name="Special Activities"
        component={SpecialActivities}
        options={{
          headerTitle: "Special Activities",
        }}
      />
    </Tab.Navigator>
  );
}
