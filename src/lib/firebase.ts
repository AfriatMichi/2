import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_4RAbPHGRut7kLK5TorqBkGbUIg1qfiI",
  authDomain: "tfila-772ad.firebaseapp.com",
  projectId: "tfila-772ad",
  storageBucket: "tfila-772ad.appspot.com",
  messagingSenderId: "1041334561919",
  appId: "1:1041334561919:web:c5222a28a5de705439a34a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const ScheduleAdmin = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto p-8 text-center">
        <h2 className="text-xl mb-4">התחברות נדרשת</h2>
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
          התחבר עם Google
        </button>
      </div>
    );
  }

  if (user.uid !== "TXVzrFp1XATThDohNTJuhaF8Gpq1") {
    return (
      <div className="max-w-md mx-auto p-8 text-center">
        <h2 className="text-xl mb-4">אין לך הרשאה לעדכן שיעורים</h2>
        <button onClick={handleLogout} className="bg-gray-400 text-white px-4 py-2 rounded">
          התנתק
        </button>
      </div>
    );
  }

  // ...המשך ScheduleAdmin (הטופס והטבלה)
}
