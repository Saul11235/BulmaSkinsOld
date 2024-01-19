/* Config view page to firt use in BulmaSkin view*/
var skin="defauult";
var currentUrl = window.location.href;

//---------------------------------------
var url=new URL(currentUrl);

if (!(url.searchParams.get("skin") === null)){
  skin=url.searchParams.get("skin");
};
if ( url.searchParams.get("dark") === null){
  sessionStorage.setItem("BulmaSkins-state", JSON.stringify({ light: true}));
} 
if ( url.searchParams.get("dark") === "true"){
  sessionStorage.setItem("BulmaSkins-state", JSON.stringify({ light: false}));
} 
if ( url.searchParams.get("dark") === "false"){
  sessionStorage.setItem("BulmaSkins-state", JSON.stringify({ light: true}));
} 

//---------------------------------------
var element_light=document.getElementById("BulmaSkins-light");
var element_dark=document.getElementById("BulmaSkins-dark");
element_light.href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/"+skin+".light.css";
element_dark.href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/"+skin+".dark.css";
document.title=skin
//---------------------------------------
// making BulmaSkins_state
if (sessionStorage.getItem("BulmaSkins-state") === null){
  console.log("creando nuevo estado");
  let BulmaSkins_state= { light: true };
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     BulmaSkins_state= { light: false};
   }
  sessionStorage.setItem("BulmaSkins-state", JSON.stringify(BulmaSkins_state));
}
// adding style element
if (JSON.parse(sessionStorage.getItem("BulmaSkins-state"))["light"] === true) {
  document.getElementById("BulmaSkins-light").disabled=false;
  document.getElementById("BulmaSkins-dark").disabled=true;
} else {
  document.getElementById("BulmaSkins-dark").disabled=false;
  document.getElementById("BulmaSkins-light").disabled=true;
};

