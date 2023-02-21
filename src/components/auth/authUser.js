import { useState, useEffect } from 'react'
import {  firebaseAuth } from '@/utils/firebase/firebaseAuth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});
var auth = firebaseAuth();
export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPasswords = async (email, password) =>
  await signInWithEmailAndPassword(auth,email, password);

  const createUserWithEmailAndPasswords = async (email, password) =>
  await createUserWithEmailAndPassword(auth,email, password);

  const signOuts = () =>
  signOut.then(clear);

// listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPasswords,
    createUserWithEmailAndPasswords,
    signOuts
  };
}