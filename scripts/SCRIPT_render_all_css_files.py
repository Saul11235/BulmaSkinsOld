# script for render all BulmaSkins css files
# writed by Edwin Saul

#-------------------------------------------

#-------------------------------------------

#-------------------------------------------

from os.path import isdir, join
from os import listdir,system

all_name_skins=[]
all_name_files=listdir("../skinsCode")

for name in all_name_files:
    if isdir(join("../skinsCode",name)):
        all_name_skins.append(name)

#-------------------------------------------

def render_template(namestyle):
    system(f"sass ../skinsCode/{namestyle}/{namestyle}.light.scss ../skins/{namestyle}.light.css --style compressed")
    system(f"sass ../skinsCode/{namestyle}/{namestyle}.dark.scss  ../skins/{namestyle}.dark.css  --style compressed")
    print("render "+namestyle+" ok!")

#-------------------------------------------

for style in all_name_skins:
    render_template(style)

#-------------------------------------------
if __name__=="__main__":
    input("all css files rendered! ")
