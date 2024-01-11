/* Config view page to firt use in BulmaSkin view*/

//---------------------------------------------------------
function set_text_element(idElement,text) {
  var element=document.getElementById(idElement);
  if (element!==null) {
    element.innerText=text.replace("<","&lt;").replace("\n","").replace(">","&gt;").trim();
  };
};
//---------------------------------------------------------
function set_href_element(idElement,text) {
  var element=document.getElementById(idElement);
  if (element!==null) {
    element.href=text.replace("<","&lt;").replace(">","&gt;").trim();
  };
};
//---------------------------------------------------------



set_text_element("title-target",skin+" skin");
set_text_element("light-header",skin+"-light via CDN");
set_text_element("light-cdn"   ,'<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/'+skin+'.light.css">');
set_text_element("dark-header",skin+"-dark via CDN");
set_text_element("dark-cdn"   ,'<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/'+skin+'.dark.css">'); set_text_element("switch-header",skin+" whith switch-color via CDN");
set_text_element("switch-cdn-1",`<!-- begin BulmaSkins -  `+skin+` -->
<link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/`+skins+`.light.css">
<link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/`+skins+`.dark.css">
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/BulmaSkinsJs/first.js"></script>`); 
set_text_element("switch-cdn-2",`<button id="BulmaSkins-switch" class="button is-primary"> 
 <div id="BulmaSkins-switch-light">
   Light
 </div>
 <div id="BulmaSkins-switch-dark" style="display:none">
   Dark
 </div>
</button>`); 
set_text_element("switch-cdn-3",`<!-- end BulmaSkins -->
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/BulmaSkinsJs/last.js"></script>`); 




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





