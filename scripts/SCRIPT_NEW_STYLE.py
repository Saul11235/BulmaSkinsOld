# script for creat an new style
# writed by Edwin Saul

from os.path import isdir, join
from os import listdir

all_name_skins=[]
all_name_files=listdir("../skinsCode")

for name in all_name_files:
    if isdir(join("../skinsCode",name)):
        all_name_skins.append(name.upper())

#-----------------------------------------

def createNewStyle(nameStyle):
    pass

#------------------------------------------

import SCRIPT_create_namestyles_js
