/* Config view page to firt use in BulmaSkin view*/

//---------------------------------------------------------


title_doc=document.getElementById("title_target");
title_doc.innerText=skin;



//----------------------------------------------------------

// config switch button
if (JSON.parse(sessionStorage.getItem("BulmaSkins-state"))["light"] === true) {
  document.getElementById("BulmaSkins-switch-dark").style.display="none";
  document.getElementById("BulmaSkins-switch-light").style.display="block";
} else {
  document.getElementById("BulmaSkins-switch-light").style.display="none";
  document.getElementById("BulmaSkins-switch-dark").style.display="block";
};




function BulmaSkins_ligth(){
  document.getElementById("BulmaSkins-light").disabled=false;
  document.getElementById("BulmaSkins-dark").disabled=true;
  document.getElementById("BulmaSkins-switch-dark").style.display="none";
  document.getElementById("BulmaSkins-switch-light").style.display="block";
  sessionStorage.setItem("BulmaSkins-state", JSON.stringify({light: true}));
}

function BulmaSkins_dark(){
  document.getElementById("BulmaSkins-dark").disabled=false;
  document.getElementById("BulmaSkins-light").disabled=true;
  document.getElementById("BulmaSkins-switch-light").style.display="none";
  document.getElementById("BulmaSkins-switch-dark").style.display="block";
  sessionStorage.setItem("BulmaSkins-state", JSON.stringify({light: false}));
}

function BulmaSkins_click() {
  if (JSON.parse(sessionStorage.getItem("BulmaSkins-state"))["light"] === true) 
  {BulmaSkins_dark();}  else{ BulmaSkins_ligth(); }; };

var BulmaSkins_switch=document.getElementById("BulmaSkins-switch")
BulmaSkins_switch.addEventListener("click",BulmaSkins_click);





