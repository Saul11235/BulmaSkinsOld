# script for create an new style
# writed by Edwin Saul

from os.path import isdir, join
from os import listdir, makedirs

all_name_skins=[]
all_name_files=listdir("../skinsCode")

for name in all_name_files:
    if isdir(join("../skinsCode",name)):
        all_name_skins.append(name.upper())

#-----------------------------------------

def newFile(namefile,contentfile):
    f=open(namefile,"w")
    f.write(contentfile)
    f.close()
#-----------------------------------------

def createNewStyle(nameStyle):
    stylepath=str(join("../skinsCode",nameStyle))
    def filepath(name):return str(join(stylepath,name))
    makedirs(stylepath)
    #--- light theme-------
    newFile(filepath(nameStyle+".light.scss"),
f"""// theme {nameStyle}-light, for BulmaSkins by Edwin Saul  
//            
            """)
    #--- Dark theme-------
    newFile(filepath(nameStyle+".dark.scss"),
f"""// theme {nameStyle}-dark, for BulmaSkins by Edwin Saul  
//            
            """)
    #--- README.md -------
    newFile(filepath("README.md"),
f"""
# {nameStyle}            
theme of BulmaSkins, visit project page here:

![by Edwin Saul](https:edwinsaul.com)           
            """)
    #----------------------



    input (nameStyle+" created!")

#------------------------------------------

newSkin=input("Name for the new style: ").replace(" ","")
if newSkin.upper() in all_name_skins:
    input("the name corresponds to an existing style")
else:
    createNewStyle(newSkin)

#-----------------------------------------

import SCRIPT_create_namestyles_js
