// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase-admin/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDO_7YLtXOZpz8AZxdOrezgZkgSja1utVE',
  authDomain: 'prepmock-e3b83.firebaseapp.com',
  projectId: 'prepmock-e3b83',
  storageBucket: 'prepmock-e3b83.firebasestorage.app',
  messagingSenderId: '955285532055',
  appId: '1:955285532055:web:5ce17d9d4643f964ac68d2',
  measurementId: 'G-TWCBVHWNF2',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
