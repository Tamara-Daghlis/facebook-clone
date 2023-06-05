import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase-config.js";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getCurrentUserImage } from "../Data/currentUserImage.js";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const currentUserImage = getCurrentUserImage();

  async function signup(email, password, firstName, lastName) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // Update user profile
      try {
        await updateProfile(res.user, {
          displayName: `${firstName} ${lastName}`,
          photoURL: currentUserImage,
        });
        // Create user document in Firestore
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName: `${firstName} ${lastName}`,
          email,
          photoURL: currentUserImage,
        });

        //create the userChats in FireStore
        await setDoc(doc(db, "userChats", res.user.uid), {});

        return res.user;
      } catch (error) {
        console.log("Error updating profile:", error);
      }
    } catch (error) {
      console.log("Error creating user in db:", error);
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
