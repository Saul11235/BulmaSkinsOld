
function BulmaSkins_get() {
  // devuelve null si no existe, true si es ligth false si es dark
  
 let object_BulmaSkins=sessionStorage.getItem("BulmaSkins-state");
 if (object_BulmaSkins === null) {
   return null;
 } else {
   return JSON.parse(object_BulmaSkins)["light"];
 };
};

//-------------------------------------------------
function BulmaSkins_set(state_var) {
  // crea y almacena el valor si 
  sessionStorage.setItem("BulmaSkins-state", JSON.stringify({light: state_var}));
};
//--------------------------------------------------
function BulmaSkins_isdarkmode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
// making BulmaSkins_state
//
if ( BulmaSkins_get() === null){
  console.log("creando nuevo estado");
  if (BulmaSkins_isdarkmode()) {
     BulmaSkins_set(false);
   } else {
     BulmaSkins_set(true);
   }
}
// first theme config
if (BulmaSkins_get() === true) {
  document.getElementById("BulmaSkins-light").disabled=false;
  document.getElementById("BulmaSkins-dark").disabled=true;
} else {
  document.getElementById("BulmaSkins-dark").disabled=false;
  document.getElementById("BulmaSkins-light").disabled=true;
};





