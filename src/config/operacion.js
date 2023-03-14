import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKX7Y-t_ILAGwUhNv6MSGDcfpdtfOq_1o",
  authDomain: "gastosvue-6737a.firebaseapp.com",
  projectId: "gastosvue-6737a",
  storageBucket: "gastosvue-6737a.appspot.com",
  messagingSenderId: "830310066903",
  appId: "1:830310066903:web:9ff165481307bc06f01e92",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const gastosRef = ref(db, "gastos");


export default gastosRef