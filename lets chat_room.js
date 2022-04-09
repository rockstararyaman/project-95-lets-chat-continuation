// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR_yjoPLCxPTpUO6pwsSHMrwBIcNVkgvI",
  authDomain: "lets-chat-web-app-2-upgr-fbase.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-2-upgr-fbase-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-2-upgr-fbase",
  storageBucket: "lets-chat-web-app-2-upgr-fbase.appspot.com",
  messagingSenderId: "834354460248",
  appId: "1:834354460248:web:6307136cfea016d50bfc2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(user_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "lets chat_page.html";

}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Lets chat_login.html";
}



function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "Lets chat_login.html";
}