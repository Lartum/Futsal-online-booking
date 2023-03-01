import firebase_app from "@/utils/firebase/config";
import { getDoc, getFirestore, doc } from "firebase/firestore";

export const getUserRole = async ({ uid }) => {
  try {
    const db = getFirestore(firebase_app);
    const snap = await getDoc(doc(db, "UserClaims", uid));
    if (snap.exists()) {
      return {
        data: snap.data(),
        error: null,
      };
    }
    return {
      data: null,
      error: "No User Claim Found",
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};
