# angular-7-course

[Link of the course](https://www.udemy.com/the-complete-guide-to-angular-2/)

# Definition
*Angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications(SPAs).*

# Build First Angular app

Command line to install Angular

npm install -g @angular/cli
ng new name-project
cd name-project
ng serve

# App folder

app.compenent.css : This file contains the stylesheet of the page.
app.component.html : This file contains the HTML structure of the page.
app.component.ts : This file contains typescript code that is responsable for the page processing, and for to define whose files will be loaded in the page. This page contains some classes that can be exported as the AppComponent class that can contains variables and functions beetween others things.
app.module.ts : This file make the imports of libraries been used in the project.

# What is TypeScript

TypeScript is a addition to JavaScript that offers more features as Types, Classes, Interfaces, etc.
TypeScript is compiled to JavaScript.

# Node Modules 

node_modules contains all the files of the libraries been used in the project.

# Components

Components are the parts that are used to build the application, every application has its own root component.
Each component has its own template, stylesheet and business logic.
Decorators are used in components. Example: @Component.
Components must have a template, however style and selector are optional.

# Decorator

Decorator is a TypeScript feature that enhance classes, elements that are used in your code, is not restricted to classes but is often used with them.
