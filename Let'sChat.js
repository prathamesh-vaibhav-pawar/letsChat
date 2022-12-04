// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBi7eqZFHVWoRecWP4d0sVvUYU3KfXcREc",
  authDomain: "let-schat-26af1.firebaseapp.com",
  databaseURL: "https://let-schat-26af1-default-rtdb.firebaseio.com",
  projectId: "let-schat-26af1",
  storageBucket: "let-schat-26af1.appspot.com",
  messagingSenderId: "738876535515",
  appId: "1:738876535515:web:5eb308a86cfbad9a4c92fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function CreateRoom(){
    RoomName = document.getElementById("Room_name").value 
    firebase.database().ref("/").child(RoomName).update({
      Data:"Stored"
    })
    window.location = "RoomMain.html"
}