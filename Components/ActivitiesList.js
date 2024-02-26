import { FlatList, StyleSheet, Text, View, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ActivityItem from "./ActivityItem";
import { EntriesContext } from "./EntriesContext";
import { Color } from "../Helpers/Color";
import { db } from "../firebase-files/firebaseSetup";
import { collection, onSnapshot } from "firebase/firestore";
import { readFromDB } from "../firebase-files/firestoreHelper";

export default function ActivitiesList({ specialOnly, navigation }) {
  // // const { entries, setEntries } = useContext(EntriesContext);
  useEffect(() => {
    // set up a listener to get realtime data from firestore - only after the first render
    onSnapshot(collection(db, "activities"), (querySnapshot) => {
      if (querySnapshot.empty) {
        return;
      }
      // loop through this querySnapshot (forEach) => a bunch of docSnapshot
      // call .data() on each documentsnapshot
      let newArray = [];
      querySnapshot.forEach((doc) => {
        // update this to also add id of doc to the newArray
        newArray.push({ ...doc.data(), id: doc.id });
        // store this data in a new array
      });
      // console.log(newArray);
      // updating the activities array with the new array
      setEntries(newArray);
    });
  }, []);

  const [entries, setEntries] = useState([]);

  // const entries = readFromDB();

  // Filter entries based on specialOnly prop
  const filteredEntries = specialOnly
    ? entries.filter((entry) => entry.special)
    : entries;

  const renderItem = ({ item }) => (
    <ActivityItem
      id={item.id}
      activity={item.activity}
      duration={item.duration}
      date={item.date}
      special={item.special}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredEntries} // Use filtered entries based on specialOnly prop
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});
