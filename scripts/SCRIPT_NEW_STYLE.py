# script for create an new style
# writed by Edwin Saul

from os.path import isdir, join
from os import listdir, makedirs, system

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
f"""//  This file is autogenerated, do not modify manually
@import "../../bulma/sass/utilities/_all.sass";
@import "1.{nameStyle}.light.custom.scss";  
@import "../../bulma/bulma.sass";""")  
    #--- Dark theme-------
    newFile(filepath(nameStyle+".dark.scss"),
f"""//  This file is autogenerated, do not modify manually
@import "../../bulma/sass/utilities/_all.sass";
@import "1.{nameStyle}.light.custom.scss";  
@import "2.{nameStyle}.dark.custom.scss";  
@import "../../bulma/bulma.sass";""")
    #--- light theme- custom------
    newFile(filepath("1."+nameStyle+".light.custom.scss"),
f"""//
// custom {nameStyle} light style here
//
//---------------------------------------

$bulmaskin_var: darkred; // <-- custom color
$colors: mergeColorMaps(
    (    
    "primary": (
            $bulmaskin_var,
            $white,
        ),
    ),
    $custom-colors
);
$link: $bulmaskin_var;
$body-background-color: white;

            """)
    #--- light theme- custom------
    newFile(filepath("2."+nameStyle+".dark.custom.scss"),
f"""//
// custom {nameStyle} dark style here
//
//---------------------------------------

$body-background-color: #d0d0d0;

            """)
    #--- test light.html -------
    newFile(filepath(f"test.{nameStyle}.light.html"),
f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test {nameStyle} light</title>
    <link rel="stylesheet" href="../../skins/{nameStyle}.light.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</head>
<body>
  <section class="hero is-primary"> <div class="hero-body">
    <p class="title">test {nameStyle} light</p>
    <a href="test.{nameStyle}.dark.html">view dark</a>
  </div></section>
  <div id="put_reel_html_here"></div>
  <script src="../../js/get_html_reel.js"></script>
</body>
</html> """)
    #--- test dark .html -------
    newFile(filepath(f"test.{nameStyle}.dark.html" ),
f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test {nameStyle} dark </title>
    <link rel="stylesheet" href="../../skins/{nameStyle}.dark.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</head>
<body>
  <section class="hero is-primary"> <div class="hero-body">
    <p class="title">test {nameStyle} dark</p>
    <a href="test.{nameStyle}.light.html">view light</a>
  </div></section>
  <div id="put_reel_html_here"></div>
  <script src="../../js/get_html_reel.js"></script>
</body>
</html> """ )
    #--- README.md -------
    newFile(filepath("README.md"),
f"""
# {nameStyle}            

a Theme for Bulma part of BulmaSkins             

[![ Preview {nameStyle} ](https://img.shields.io/badge/-Preview_{nameStyle}-red)](https://saul11235.github.io/BulmaSkins/view?skin={nameStyle})
[![ light mode ](https://img.shields.io/badge/-light_mode-black)](https://saul11235.github.io/BulmaSkins/view?skin={nameStyle}&dark=false)
[![ dark mode ](https://img.shields.io/badge/-dark_mode-black)](https://saul11235.github.io/BulmaSkins/view?skin={nameStyle}&dark=true)

## adding in your project
if you what to use this theme in your project put this in your html doc:

### {nameStyle}-light via CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/{nameStyle}.light.css">
```
### {nameStyle}-dark via CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/{nameStyle}.dark.css">
```

### {nameStyle} whith switch-color via CDN
in head element:
```html
<!-- begin BulmaSkins - {nameStyle} -->
<link id="BulmaSkins-light" rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/{nameStyle}.light.css">
<link id="BulmaSkins-dark"  rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/skins/{nameStyle}.light.css">
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/BulmaSkinsJs/first.js"></script>
```
creating a button to manage the switch themes, in body:            
```html
<!-- BulmaSkins-switch -->
<button id="BulmaSkins-switch" class="button is-primary">
 <div id="BulmaSkins-switch-light">
  Light
 </div>
 <div id="BulmaSkins-switch-dark" style="display:none">
   Dark
 </div>
</button>
```
in end of body element:            
```html
<!-- end BulmaSkins -->
<script src="https://cdn.jsdelivr.net/gh/Saul11235/BulmaSkins@latest/BulmaSkinsJs/last.js"></script>
```



[![Bulma skins](https://img.shields.io/badge/-Bulma_skins-blue)](https://saul11235.github.io/BulmaSkins/)
[![By Edwin Saul](https://img.shields.io/badge/-By_Edwin_Saul-black)](https://edwinsaul.com)
            """)          
    #--- SCRIPT_render_this.py-------
    newFile(filepath("SCRIPT_render_this.py"),
f"""# this file is autogenerated
from os import system as s
s("sass {nameStyle}.light.scss ../../skins/{nameStyle}.light.css --style compressed")
s("sass {nameStyle}.dark.scss  ../../skins/{nameStyle}.dark.css --style compressed")""")
    #--- SCRIPT_javascript switch -------
    newFile(str(join("../skinsjs",f"{nameStyle}.js")),
f"""
console.log("hola desde {nameStyle} js")            
            """)
    #----------------------
    input (nameStyle+" created!")
    system(f"vifm ../skinsCode/{nameStyle}")
    

#------------------------------------------

newSkin=input("Name for the new style: ").replace(" ","")
if newSkin.upper() in all_name_skins:
    input("the name corresponds to an existing style")
else:
    createNewStyle(newSkin)

#-----------------------------------------

import SCRIPT_create_namestyles_js
