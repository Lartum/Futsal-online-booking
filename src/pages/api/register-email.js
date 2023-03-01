import firebase_app from "@/utils/firebase/config";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";

export default async function handler(req, res) {
  const { email, password, role } = req.body;

  const db = getFirestore(firebase_app);

  const q = query(collection(db, "Roles"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  res.status(200).json({ name: "John Doe" });
}
