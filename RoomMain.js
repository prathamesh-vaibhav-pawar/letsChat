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

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  var Row = "<div class='room_name' id =" +Room_names+" onclick = 'redirect(this.id)'>"+Room_names+"</div><hr>"
  document.getElementById("Rooms").innerHTML += Row
  
});});}
  getData();