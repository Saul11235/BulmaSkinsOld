# create reel js - by Edwin Saul

file_input= open("../js/reel.html","r")
file_output=open("../js/get_html_reel.js","w")

#---------------------------------
string1="""// no code manually this file is generated
function get_html_reel() {
  return '"""
string2=file_input.read().replace("\\","\\\\").replace("'","\'").replace("\n","").replace(" "," ")
string3="""';
}
function add_reel_html() {
  var var_doc=document.getElementById("put_reel_html_here");
  var_doc.innerHTML=get_html_reel();
}

// first elelemt
add_reel_html();
"""  
full_string=string1+string2+string3;
#---------------------------------

file_output.write(full_string)

file_input.close()
file_output.close()

print("Created get_html_reel.js finished!")
