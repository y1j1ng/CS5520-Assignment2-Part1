import { collection, addDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseSetup";

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
