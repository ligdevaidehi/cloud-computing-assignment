
(function () {
    
    // Your web app's Firebase configuration
    
    const firebaseConfig = {
        apiKey: "AIzaSyB2BgyOVL7zH2PsJzyT4fa7StdJe1YH3ws",
        authDomain: "cloud-4dda5.firebaseapp.com",
        projectId: "cloud-4dda5",
        storageBucket: "cloud-4dda5.appspot.com",
        messagingSenderId: "446216973774",
        appId: "1:446216973774:web:4c92e288d51318f1dd0f9f",
        measurementId: "G-29ENCMN8TV"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());