import { collection, addDoc, query, where, getDocs, writeBatch } from "firebase/firestore";
import { db } from "../firebase";
import { sendVerificationEmail } from "./mailgunService";

export const generateAuthToken = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export const saveAuthToken = async (email: string, token: string) => {
  try {
    await addDoc(collection(db, "auth_tokens"), {
      email,
      token,
      created_at: new Date(),
      used: false,
    });
    await sendVerificationEmail(email, token);
    return true;
  } catch (error) {
    return false;
  }
};

export const verifyAuthToken = async (email: string, token: string) => {
  try {
    const q = query(
      collection(db, "auth_tokens"),
      where("email", "==", email),
      where("token", "==", token),
      where("used", "==", false)
    );

    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error verifying token:", error);
    return false;
  }
};

export const markTokenAsUsed = async (email: string, token: string) => {
  try {
    const q = query(
      collection(db, "auth_tokens"),
      where("email", "==", email),
      where("token", "==", token)
    );
    const querySnapshot = await getDocs(q);
    const batch = writeBatch(db);

    querySnapshot.forEach((doc) => {
      batch.update(doc.ref, { used: true });
    });

    await batch.commit();
    return true;
  } catch (error) {
    console.error("Error marking token as used:", error);
    return false;
  }
};
