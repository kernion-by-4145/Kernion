


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
   
    if(user != null){
      firebase.auth().signOut();
      var email_id = user.email;
      var s = email_id.replace(/@gmail.com/, '')
      document.getElementById("user_para").innerHTML = "Welcome User : " + s;
      if(s == "fireflightwork"){
        window.location = "firebasequick.html"
      }
      else{
        window.location = "linworthin.html"
      }
      

    }

  } else {
    
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){

  firebase.auth().signOut();
  window.location = "index.html"

}

