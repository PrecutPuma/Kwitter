var firebaseConfig = {
  apiKey: "AIzaSyCAl0Xghi9DyjwnH9KjXHPtGEXgL5mromI",
  authDomain: "test-kwitter-a3893.firebaseapp.com",
  databaseURL: "https://test-kwitter-a3893-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-kwitter-a3893",
  storageBucket: "test-kwitter-a3893.appspot.com",
  messagingSenderId: "54079062210",
  appId: "1:54079062210:web:be9c4a2844c231a3a8fb5b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}