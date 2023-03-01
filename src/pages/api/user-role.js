import firebase_app from "@/utils/firebase/config";
import { getDoc, getFirestore, doc } from "firebase/firestore";

export default async function handler(req, res) {
  const { uid } = req.body;
  const db = getFirestore(firebase_app);
  const snap = await getDoc(doc(db, "UserClaims", uid));
  if (snap.exists()) {
    return res
      .status(200)
      .json({ data: snap.data(), error: null, message: "success" });
  }
  return res
    .status(404)
    .json({ data: null, error: "No Document Found ", message: "Error" });
}
