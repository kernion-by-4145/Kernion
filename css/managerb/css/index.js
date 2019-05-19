firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

document.getElementById('sign').style.display = "none";
document.getElementById('dsa').style.display = "none";
document.getElementById('signout').style.display = "block";
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      var s = email_id.replace("@gmail.com", '')
      document.getElementById("user_para").innerHTML = "Welcome User : " + s;

    }

  } else {
    
    // No user is signed in.

    

  }
  
});
function tri(email_id){
  if (email_id == "fireflightwork@gmail.com") {
      window.location = "css/managerb/firebasequick.html"
}
else{
  window.location = "css/managerb/index.html"
}
}
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...ee
  });

}

function logout(){

  firebase.auth().signOut();
  window.location = "index.html"

}
function di(){
window.location = "css/Kernion.msi"
}



