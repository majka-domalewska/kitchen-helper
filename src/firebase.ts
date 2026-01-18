// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyANvcVMqAPgzBL9PuZx-eI6HsZakNnyj08',                    // from Firebase console
  authDomain: 'kitchen-helper-60bd2.firebaseapp.com',
  projectId: 'kitchen-helper-60bd2',
  storageBucket: 'kitchen-helper-60bd2.appspot.com',
  messagingSenderId: '406461077611',
  appId: '1:406461077611:web:848e7e4f8ec7f607e8f92e',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache()
});
