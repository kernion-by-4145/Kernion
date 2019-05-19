(function(){
    	var dataa = "frc-4145-attendence"
	  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUDeDtPBxOpUDkA8ip2Wk4wg-ClDzs-k0",
    authDomain: dataa+".firebaseapp.com",
    databaseURL: "https://" + dataa+ ".firebaseio.com/",
    projectId: dataa,
    storageBucket: dataa+".appspot.com",
    messagingSenderId: "232011675887"

  };
  firebase.initializeApp(config);

}());

function myFunction(){


    var x = document.getElementById("myNumber");
     var name = document.getElementById("nameinput");//call the name field
    var defaultVal = x.defaultValue;
    var currentVal = x.value;
        var defaultName = name.defaultValue;
    var currentName = name.value;

const headObject = document.getElementById('okey');
const preObject = document.getElementById('object');
//check if name was used
if(defaultName != currentName){
     
    const dbRaftObject = firebase.database().ref().child(currentName+"/id");

var newval = dbRaftObject;

newval.on('value' , snap => {

console.log(snap.val());


var id = snap.val();


const dbRefObject = firebase.database().ref().child(id);
dbRefObject.orderByChild('Name').on('value' , snap => {
    headObject.innerText = JSON.stringify(snap.val().Name, null, 3);
    
});
dbRefObject.on('value' , snap => {
    //parse the Json database data
    var nams = JSON.stringify(snap.val().Name, null, 3);
    var coold = '},';
    var nude = '{';
    var rude = '}';
   var workoutsJSON = JSON.stringify(snap.val(),null,3).replace(/"Name"/,' ').replace(nams,' ').replace(coold,' ');
    
   while(workoutsJSON.includes('{')||workoutsJSON.includes('}')||workoutsJSON.includes(',')||workoutsJSON.includes('"')){
   var workoutsJSON = workoutsJSON.replace(coold,' ').replace(nude,' ').replace(rude,' ').replace(/,/,' ').replace(/"/,' ').replace(/  : /,' '); 
    if(workoutsJSON.includes('{')||workoutsJSON.includes('},')||workoutsJSON.includes('}')||workoutsJSON.includes(',')||workoutsJSON.includes('"')){
       //check for all cases
        console.log("oof");
    }
    else{
        preObject.innerText = workoutsJSON;
    }
}

});
});
} 
if (defaultVal == currentVal){
console.log("need a value");
}
else{
    const dbRefObject = firebase.database().ref().child(currentVal);
    const dbRaftObject = firebase.database().ref();

dbRefObject.orderByChild('Name').on('value' , snap => {
    headObject.innerText = JSON.stringify(snap.val().Name, null, 3);
    
});
dbRefObject.on('value' , snap => {
    var nams = JSON.stringify(snap.val().Name, null, 3);
    var coold = '},';
    var nude = '{';
    var rude = '}';
   var workoutsJSON = JSON.stringify(snap.val(),null,3).replace(/"Name"/,' ').replace(nams,' ').replace(coold,' ');
    
   while(workoutsJSON.includes('{')||workoutsJSON.includes('}')||workoutsJSON.includes(',')||workoutsJSON.includes('"')){
   var workoutsJSON = workoutsJSON.replace(coold,' ').replace(nude,' ').replace(rude,' ').replace(/,/,' ').replace(/"/,' ').replace(/  : /,' '); 
    if(workoutsJSON.includes('{')||workoutsJSON.includes('},')||workoutsJSON.includes('}')||workoutsJSON.includes(',')||workoutsJSON.includes('"')){
        console.log("oof");
    }
    else{
        preObject.innerText = workoutsJSON;
    }
}

});
}}
function tyo(){
    Papa.parse("https://frc-4145-attendence.firebaseio.com/.json?print=pretty&format=export&download=frc-4145-attendence-export.json", {
    download: true,

    complete: function(results) {

        console.log(results);
        
            var csv = Papa.unparse(results);

    var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    var csvURL =  null;
    
    if (navigator.msSaveBlob)
    {
        csvURL = navigator.msSaveBlob(csvData, 'download.csv');
    }
    else
    {
        csvURL = window.URL.createObjectURL(csvData);
    }

    var tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'download.csv');
    tempLink.click();

    }

});

}
function popup(){
    document.getElementById("numinput").value = "";
    document.getElementById("namer").value = "";
    document.getElementById('bodi').style.display = "block";
    document.getElementById('cool').style.filter = "blur(2px)";
    document.getElementById('johf').style.filter = "blur(2px)";
    document.getElementById('bower').style.filter = "blur(10px)";
    document.getElementById('bodi').style.filter = "blur(0px)";

}
function popback(){
    document.getElementById('bodi').style.display = "none";
    document.getElementById('cool').style.filter = "blur(0px)";
    document.getElementById('johf').style.filter = "blur(0px)";
    document.getElementById('bower').style.filter = "blur(0px)";
    document.getElementById('bodi').style.filter = "blur(0px)";

}

function addchild(){ 


// Get a database reference to our blog
var dbReftObject = firebase.database().ref();
    var y = document.getElementById("numinput");
    var defautVal = y.defaultValue;
    var cuurrentVal = y.value;
    var z = document.getElementById("namer");
    var defnam = z.defaultValue;
    var curnam = z.value;


if(defautVal == cuurrentVal){
    alert("type in a ID")

}
if(defnam == curnam){
    alert("type in a Name")
}
else{
var newPostRef = dbReftObject.child(cuurrentVal).set({
    Name: curnam});
var newPostRefe = dbReftObject.child(curnam).set({
    id: cuurrentVal});
    curnam = '';
    cuurrentVal = '';
    document.getElementById('bodi').style.display = "none";
    document.getElementById('cool').style.filter = "blur(0px)";
    document.getElementById('johf').style.filter = "blur(0px)";
    document.getElementById('bower').style.filter = "blur(0px)";
    document.getElementById('bodi').style.filter = "blur(0px)";

}
}


