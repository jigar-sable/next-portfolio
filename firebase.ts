import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTD
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const database = getDatabase(app);