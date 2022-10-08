const btn = document.getElementById('button');
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Wait for a second...';

   const serviceID = 'default_service';
   const templateID = 'template_q5gv1qc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'How was the button animation?';
      alert('How is the form??');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
var x = document.getElementById("location");
 // var head = document.getElementById("heading1");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.value = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.value = "Latitude: " + position.coords.latitude + 
  "Longitude: " + position.coords.longitude ;
}
// gender ko lagi tutt place
function getData(){
var select= document.getElementById("select").value;
var gender = document.getElementById("gender")
.value = select ;


var select2= document.getElementById("select2").value;
var status = document.getElementById("status")
.value = select2 ;

}

let appVersion = navigator.appVersion;
let res = appVersion.match(/\(([^)]+)\)/i);
let deviceInfoArr = res[1].split(';');
let index = deviceInfoArr.length>2?2:deviceInfoArr.length-1
let device = deviceInfoArr[index];
window.addEventListener('DOMContentLoaded',()=>{
   document.getElementById('device').value = device;
});
