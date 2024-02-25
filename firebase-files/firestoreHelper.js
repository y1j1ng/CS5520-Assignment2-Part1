import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseSetup";
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";

export async function writeToDB(data) {
  try {
    const docRef = await addDoc(collection(db, "activities"), data);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(db, "activities", id));
  } catch (err) {
    console.log(err);
  }
}

// export async function readFromDB() {
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     // set up a listener to get realtime data from firestore - only after the first render
//     onSnapshot(collection(db, "activities"), (querySnapshot) => {
//       if (querySnapshot.empty) {
//         return;
//       }
//       // loop through this querySnapshot (forEach) => a bunch of docSnapshot
//       // call .data() on each documentsnapshot
//       let newArray = [];
//       querySnapshot.forEach((doc) => {
//         // update this to also add id of doc to the newArray
//         newArray.push({ ...doc.data(), id: doc.id });
//         // store this data in a new array
//       });
//       // console.log(newArray);
//       // updating the activities array with the new array
//       setEntries(newArray);
//     });
//   }, []);

//   return entries;
// }
