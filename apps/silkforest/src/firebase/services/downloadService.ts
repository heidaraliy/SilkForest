import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const saveDownloadInfo = async (email: string, productId: string) => {
  try {
    const userDocRef = doc(db, "users", email);

    await setDoc(
      userDocRef,
      {
        email,
        timestamp: new Date(),
      },
      { merge: true }
    );

    await addDoc(collection(db, "download_events"), {
      user_id: email,
      email,
      product_id: productId,
      timestamp: new Date(),
    });

    return true;
  } catch (error) {
    return false;
  }
};
