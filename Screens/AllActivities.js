import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActivitiesList from "../Components/ActivitiesList";

export default function AllActivities() {
  return (
    <View>
      <ActivitiesList specialOnly={false} />
    </View>
  );
}

const styles = StyleSheet.create({});
