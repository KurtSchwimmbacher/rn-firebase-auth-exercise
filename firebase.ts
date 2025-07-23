// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkljYbBnbblDNTdQGbS1r0RGh3l6sqG4U",
  authDomain: "safelydv300classproj.firebaseapp.com",
  projectId: "safelydv300classproj",
  storageBucket: "safelydv300classproj.firebasestorage.app",
  messagingSenderId: "130552682344",
  appId: "1:130552682344:web:f4346a2857acb59cc7e8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialise all our services for our firebase app
export const auth = getAuth(app); // links to the auth services to our app -> need to use this auth variable



// HOMEWORK
// ✅ 1. Create registration screen ui 
// ✅ 2. create registration function in authService.tsx
// 3. add the functionality to your registration screen
// 4. add efficient navigation between login and registration screens

// Kurt imposed extra BONUSES
// 1. switch to useContext for auth state management
// 2. add user data to firestore db 
// 3. fix the localstorage issue to persist user login state
