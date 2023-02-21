import { getAuth } from "firebase/auth";
import InitFirebase from "./config";


export const firebaseAuth = () => {
    InitFirebase();
    return getAuth();
}



