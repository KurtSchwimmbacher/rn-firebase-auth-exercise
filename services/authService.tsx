// TODO: Create Firebase Auth Functions

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase"


export const loginUser = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User logged in:", user.email);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log("error:", errorMessage);
        });
}

// Homework = Registration

export const logoutUser = () => {
    signOut(auth)
        .then(() => {
            // sign out successful
            console.log("User logged out successfully");
        })
        .catch((error) => {
            console.log("Error logging out:", error.message);
        })
}

export const registerUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("User registered successfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error creating user: ", errorMessage)
  });
}

export const getUserInfo = () => {
    const user = auth.currentUser;
    if (user) { //logic handling && no null errors
        // User is signed in
        return user;
    } else {
        // No user is signed in
        console.log("No user is currently signed in.");
        return null;
    }
}