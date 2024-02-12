import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ActivityItem from "./ActivityItem";
import { EntriesContext } from "../App";

export default function ActivitiesList({ specialOnly }) {
  const { entries, setEntries } = useContext(EntriesContext);

  // Filter entries based on specialOnly prop
  const filteredEntries = specialOnly
    ? entries.filter((entry) => entry.special)
    : entries;

  const renderItem = ({ item }) => (
    <ActivityItem
      activity={item.activity}
      duration={item.duration}
      date={item.date}
      special={item.special}
    />
  );

  return (
    <View>
      <FlatList
        data={filteredEntries} // Use filtered entries based on specialOnly prop
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
