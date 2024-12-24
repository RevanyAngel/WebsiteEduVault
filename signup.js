// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS4ci0Hl5zKE-kHmqu6CJiaSlH1GwjMK0",
    authDomain: "eduvault-login.firebaseapp.com",
    projectId: "eduvault-login",
    storageBucket: "eduvault-login.appspot.com",
    messagingSenderId: "281632926505",
    appId: "1:281632926505:web:61a233fc0a74dde9cd6538",
    measurementId: "G-5WV3Y5DXL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();
    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account...");

            // Save user data to Firestore
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                uid: user.uid
            });

            // Redirect to home.html
            window.location.href = "home.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
