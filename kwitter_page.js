//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDXaY2APOeVgTD6-TmaZhe3xv-gwsDZcCA",
      authDomain: "kwitter-47f72.firebaseapp.com",
      databaseURL: "https://kwitter-47f72-default-rtdb.firebaseio.com",
      projectId: "kwitter-47f72",
      storageBucket: "kwitter-47f72.appspot.com",
      messagingSenderId: "123034929816",
      appId: "1:123034929816:web:3b6effa75bcd5476699eed"
    };
    
    
firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("person");
roomname=localStorage.getItem("Roomname");

function send(){
   msg=document.getElementById("msg").value;
   firebase.database().ref(roomname).push({
      name : username,
      message : msg,
      like : 0
   });
   document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data); 



      } });  }); }
getData();

function logout(){
      localStorage.removeItem("person");
      localStorage.removeItem("Roomname");
      window.location.replace("index.html");
}
