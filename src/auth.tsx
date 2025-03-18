import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";

export const AuthProvider = ({ setUser }: { setUser: (user: any) => void }) => {
  const auth = getAuth(app);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      setUser(maybeUser);
    });
    return unsub;
  }, [auth, setUser]);

  return null; 
};
