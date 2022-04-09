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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("messg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("messg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();