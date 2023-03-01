import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/utils/firebase/config";
import axios from "axios";
const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

const formatUser = (user) => ({
  uid: user.uid,
  email: user.email,
  role: user.claim,
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      var url = "http://localhost:3000/api/user-role";
      if (user) {
        axios.post(url, { uid: user.uid }).then(({ data }) => {
          if (data !== null) {
            user.claim = data.data.claim;
            setUser(formatUser(user));
          }
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
