// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

// Submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();
    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login Successful!");

            // Redirect to home.html
            window.location.href = "home.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
