// 1) Replace every value below with your Firebase project's Web App config.
// Firebase Console -> Project settings -> Your apps -> Web app.
// This config is public by design; Firestore Security Rules protect your data.
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// The website uses Firebase Authentication + Cloud Firestore.
export const COLLECTIONS = { posts: "posts", settings: "siteSettings", admins: "admins" };