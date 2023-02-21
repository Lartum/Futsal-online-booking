import { createContext, useContext } from "react";
import useFirebaseAuth from "../auth/authUser";

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPasswords: async () => {},
  createUserWithEmailAndPasswords: async () => {},
  signOuts: async () => {}
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
