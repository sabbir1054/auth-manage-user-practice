import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const AuthInitialization = () => {
  initializeApp(firebaseConfig);
};

export default AuthInitialization;
