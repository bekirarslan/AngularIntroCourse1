# AngularIntroCourse1
This repository contains my notes and execution of the angular beginner course from @MarkTechson at Angular youtube channel.

To kickstart my journey to angular, I chose the following course from Mark Thomson that is located at the angular official youtube channel at <a href="https://www.youtube.com/watch?v=xAT0lHYhHMY&list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF">Learning Angular </a>.
I will be doing commits at least at every video and will include my notes at the code.
 
Preparing the environment and project
--------
* download the first lesson from: https://goo.gle/learn-angular-step-1 , open the package.json file and find versions of the angular and node version which is located at the "dependencies" section. File link might be old therefore install the appropriate version.
* install vscode
* install node.js
* install angular
* run the `npm install -g @angular/cli` and npm install commands for installing all requeired npm packages.
* intall the dependencies `npm install` 
* finally `ng serve` command to to start the application locally : that opens the project in localhost:4200 local url and files are served there.
* this project is a completed version of this tutorial therefore it does not include the step by step tutorial.
* in order to run this project also install mock json server with this command `npm install -g json-server`
* then attach the db file to it with the following command: `json-server --watch db.json`

Troubleshooting
-------
in windows 10 it gives error when running `ng serve` command. In order to fix this error. Go to `C:\Users\[YourMachineUserName]\AppData\Roaming\npm\` and delete the `ng.ps1` file sometimes you may need to remove the npm-cache as well.
  
Notes
--------------
* src folder is where source code is. Code will be written under that folder.
* src/app/app.component.ts file contains the html and typescript code
* a component has  html template, typescript class and styles.
* styles are default stored at a separate file. Html template can be stored in a separate file as well but for this course it will be stored in the same file.
* following command creates a new  component named Home and  it is a standalone component which means it is a new type of Angular component that does not need to be declared in a NgModule `ng generate component Home --standalone --inline-template` --inline-template means the html template will be inside the component itself not a separate file. That command creates 3 files.
