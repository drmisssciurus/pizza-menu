import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlN6ZInzdYNUozsBn_sI68R61u3VNmYmg',
  authDomain: 'my-test-project-178c3.firebaseapp.com',
  projectId: 'my-test-project-178c3',
  storageBucket: 'my-test-project-178c3.firebasestorage.app',
  messagingSenderId: '302203915009',
  appId: '1:302203915009:web:3a99ccb2c72b8eb05d6900',
  measurementId: 'G-VEGRKZ92M9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export { app };
