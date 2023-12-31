# create js function for get all name in styles

from os.path import isdir, join
from os import listdir

all_name_skins=[]
all_name_files=listdir("../skinsCode")

for name in all_name_files:
    if isdir(join("../skinsCode",name)):
        all_name_skins.append(name)

file_name_skins= open("../js/get_name_skins.js","w")

#---------------------------------

string1="""// no code manually this file is generated
function get_name_skins() {
 return ['"""
string2="','".join(all_name_skins)
string3="""'];
}"""
full_string=string1+string2+string3;
#---------------------------------

file_name_skins.write(full_string)

file_name_skins.close()

print("Created get_name_skins finished!")

