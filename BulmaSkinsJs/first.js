var BulmaSkins_debug=false; // set BulmaSkins_debug=true  to debug
function msg_debug(str){if (BulmaSkins_debug===true) {console.log("BulmaSkins debug : "+str)};}
//-----------------------------------
function BulmaSkins_get() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf('BulmaSkins_cookie=') === 0) {
	  if (cookie.replace("BulmaSkins_cookie","").replace("=","").trim()==="true")
	  { 
	    msg_debug("get true");
	    return true;
	  }
	  else {
	    msg_debug("get false");
	    return false};
        }
    }
    msg_debug("get null");
    return null; // BulmaSkins_cookie not exists
};
function BulmaSkins_set(state) {
    var expiration= new Date();
    expiration.setDate(expiration.getDate()+7);
    var cookie = 'BulmaSkins_cookie=' + state+ '; expires=' + expiration.toUTCString() + '; path=/; sameSite=Strict';
    document.cookie = cookie;
};
// is dark mode
function BulmaSkins_isdarkmode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
// making BulmaSkins_state
if ( BulmaSkins_get() === null){
  msg_debug("create a new cookie");
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
  BulmaSkins_set(true);
  msg_debug("first config ligth");
} else {
  document.getElementById("BulmaSkins-dark").disabled=false;
  document.getElementById("BulmaSkins-light").disabled=true;
  BulmaSkins_set(false);
  msg_debug("first config dark");
};
