import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, signOut, User } from "firebase/auth";
import { app, googleAuthProvider } from "./firebase";
import { Navbar } from "./components/navbar";

const AuthenticatedLayout = () => (
  <div>
    <h1>Welcome!</h1>
    <p>You are authorized.</p>
  </div>
);

const UnauthenticatedLayout = () => (
  <div>
    <h1>Please sign in!</h1>
    <p>You must be logged in to access the content.</p>
  </div>
);

function App() {
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth(app);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((maybeUser) => {
      setUser(maybeUser);
    });
    return unsub;
  }, [auth]);

  const signIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((credentials) => setUser(credentials.user))
      .catch((e) => console.error(e));
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((e) => console.error(e));
  };

  return (
    <div className="App">
      <Navbar user={user} onSignIn={signIn} onSignOut={signOutUser} />
      {user ? <AuthenticatedLayout /> : <UnauthenticatedLayout />}
    </div>
  );
}

export default App;
