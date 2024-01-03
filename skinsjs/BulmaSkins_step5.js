// BulmaSkins-STEP-5  // end body
// config switch button
if (BulmaSkins_get() === true) {
  document.getElementById("BulmaSkins-switch-dark").style.display="none";
  document.getElementById("BulmaSkins-switch-light").style.display="block";
} else {
  document.getElementById("BulmaSkins-switch-light").style.display="none";
  document.getElementById("BulmaSkins-switch-dark").style.display="block";
};
// function to set themes
function BulmaSkins_ligth(){
  document.getElementById("BulmaSkins-light").disabled=false;
  document.getElementById("BulmaSkins-dark").disabled=true;
  document.getElementById("BulmaSkins-switch-dark").style.display="none";
  document.getElementById("BulmaSkins-switch-light").style.display="block";
  BulmaSkins_set(true);
}
function BulmaSkins_dark(){
  document.getElementById("BulmaSkins-dark").disabled=false;
  document.getElementById("BulmaSkins-light").disabled=true;
  document.getElementById("BulmaSkins-switch-light").style.display="none";
  document.getElementById("BulmaSkins-switch-dark").style.display="block";
  BulmaSkins_set(false);
}
// listener to BulmaSkins_switch
function BulmaSkins_click() {
  if (BulmaSkins_get() === true) {BulmaSkins_dark();}  
  else  { BulmaSkins_ligth(); };
};
var BulmaSkins_switch=document.getElementById("BulmaSkins-switch")
BulmaSkins_switch.addEventListener("click",BulmaSkins_click);
