
var firebaseConfig = {
    apiKey: "AIzaSyAgS37mtY1m3qHBueaG8-0jTBA_tOg4bBk",
    authDomain: "kwitter---practice-proje-2e725.firebaseapp.com",
    databaseURL: "https://kwitter---practice-proje-2e725-default-rtdb.firebaseio.com",
    projectId: "kwitter---practice-proje-2e725",
    storageBucket: "kwitter---practice-proje-2e725.appspot.com",
    messagingSenderId: "19939375073",
    appId: "1:19939375073:web:411e970fa750cd406484a0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }