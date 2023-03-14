import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBKX7Y-t_ILAGwUhNv6MSGDcfpdtfOq_1o",
    authDomain: "gastosvue-6737a.firebaseapp.com",
    projectId: "gastosvue-6737a",
    storageBucket: "gastosvue-6737a.appspot.com",
    messagingSenderId: "830310066903",
    appId: "1:830310066903:web:9ff165481307bc06f01e92"
};

// Inicializa la aplicación de Firebase
const app = firebase.initializeApp(firebaseConfig);

// Configura la autenticación de Firebase
const auth = app.auth();



export { app, auth,  };

