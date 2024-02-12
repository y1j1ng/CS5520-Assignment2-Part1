import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ActivityItem from "./ActivityItem";
import { EntriesContext } from "../App";

export default function ActivitiesList() {
  const { entries, setEntries } = useContext(EntriesContext);

  const renderItem = ({ item }) => (
    <ActivityItem
      activity={item.activity}
      duration={item.duration}
      date={item.date}
    />
  );

  return (
    <View>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
