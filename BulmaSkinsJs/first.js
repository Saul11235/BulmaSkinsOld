function BulmaSkins_get() {
  // null if the cookie not exists; true light; false dark
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf('BulmaSkins_cookie=') === 0) {
	  if (cookie.replace("BulmaSkins_cookie","").replace("=","").trim()==="true")
	  { 
	    return true;
	  }
	  else {
	    return false};
        }
    }
    return null; // BulmaSkins_cookie not exists
};
function BulmaSkins_set(state) {
  // save state
    var expiration= new Date();
    expiration.setDate(expiration.getDate()+7);
    var cookie = 'BulmaSkins_cookie=' + state+ '; expires=' + expiration.toUTCString() + '; path=/; sameSite=Lax';
    document.cookie = cookie;
};
// is dark mode
function BulmaSkins_isdarkmode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
// making BulmaSkins_state
if ( BulmaSkins_get() === null){
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
