# angular-7-course

[Link of the course](https://www.udemy.com/the-complete-guide-to-angular-2/)

## Definition
*Angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications(SPAs).*

## Build First Angular app

Command line to install Angular

npm install -g @angular/cli
ng new name-project
cd name-project
ng serve

## App folder

app.compenent.css : This file contains the stylesheet of the page.

app.component.html : This file contains the HTML structure of the page.

app.component.ts : This file contains typescript code that is responsable for the page processing, and for to define whose files will be loaded in the page. This page contains some classes that can be exported as the AppComponent class that can contains variables and functions beetween others things.

app.module.ts : This file make the imports of libraries been used in the project.

## What is TypeScript

TypeScript is a addition to JavaScript that offers more features as Types, Classes, Interfaces, etc.

TypeScript is compiled to JavaScript.

## Node Modules 

node_modules contains all the files of the libraries been used in the project.

## Components

Components are the parts that are used to build the application, every application has its own root component.

Each component has its own template, stylesheet and business logic.

Decorators are used in components. ```Example: @Component.```

Components must have a template, however style and selector are optional.

### Component Properties
selector: Is used to select some HTML ```<tag>```, ```[attribute]``` or ```.class```. ```(e.g <p> , [src], .btn)```
  
templateUrl: Is used to add the URL of the HTML file. ```(e.g. './app.component.html')```

template: Is used to add the HTML tags. ```(e.g. <header> Header </header>)```

styleUrls: Is used to add the URL of the CSS file. ```(e.g. './app.component.css')```

styles: Is used to add CSS stylesheet. ```(e.g. p {color: orange})```


## Decorator

Decorator is a TypeScript feature that enhance classes, elements that are used in your code, is not restricted to classes but is often used with them.

## Databinding

Databinding = Communication

Output Data:

String Interpolation (```{{data}}```)

Property Binding (```[properties] = "data" ```)

React to Events:

Event Binding (```(event) = "expression" ```)

Two-Way-Binding(```[(ngModel)] = "data" ```)

### Property binding vs String Interpolation

String Interpolation must be used just to show some text in the page.

Property Binding must be used when is needed to change the state of some component.

## Variable Declaration

```variableName : type = value;```

## Event Binding

...

# Important libraries and how to install them

Install example: npm install namePackage --save

## Important libraries

BootStrap : Used to stylesheet.

FormsModule: Used to get input from some field.

## Directives

Directives are Instructions in the DOM.

### Built-in Directives 

ngIf = ``` *ngIf = "serverCreated" ```

ngIf with else = ```<p *ngIf = "serverCreated; else noServer"> Server was created, server name is {{ serverName }} </p>
                    <ng-template #noServer>
                        <p>No server was created!</p>
                    </ng-template>
                    ```

ngStyle = ```[ngStyle] = "{backgroundColor: getcolor()}"```

ngClass = ```[ngClass] = "{online: getServerStatus() === 'online'}"```

ngFor =  ``` *ngFor="let server of servers" ```

## Components and Databinding

### Custom properties binding

@Input() : It is a decorator that allows a property be visible outside its class.

@Input('test') : When you put some string inside of the parenteses that string passes to reference the varible outside the class.

@Output() : It is a decorator that can emit a event with parameters when it's activered.

To use a predefined method inside a tag:

1. Declare the event:

```@Output() nameEvent = new EventEmitter<parameters>(); ```

The behavior of the EventEmitter seems like a Observer notifying the Subject that is waiting for something event to happen to do something.

is posible add a custom name for this event too

```@Output('otherName') nameEvent = new EventEmitter<parameters>(); ```

2. Define some method to use the Event and fill out the parameters.

```method(){```

```this.nameEvent.emit(parameters);```
  
```}```

3. add the event in the tag:

```<app-test (nameEvent) = "method($event)" ></app-test>```


## View Encapsulation

There is 3 types of encapsulation.

encapsulation: ViewEncapsulation.None : Use this when you need that some style be applied globally.

encapsulation: ViewEncapsulation.Native : Use this when you want to give to each tag its own style, but this is not supported for some browsers.

encapsulation: ViewEncapsulation.Emulated : Use this when you need emulate the Shadow DOM, this view encapsulation can be used by most part of the browsers.

## Local Reference

How to declare:

<input type="text" #localReference>

How to use:

<button (click) = "doSomething(localReference)"></button>

The local reference can be just used in the template, the local reference returns the element in which it was put in. Like in this example is possible to retrieve that value of element, but just because is a input element, each element has his own properties and possibities of use.

Projecting Content into Components 

The default behavior of the angular ignore the content inside the open and close tag of your component. But is possible to show the content inside the tags with the ```<ng-content><\ng-content> ``` , this way the content will appear where the tag
was placed.

### Component lifecycle

ngOnChanges : Called after a bound input property changes.

ngOnInit : Called once the component is inialized.

ngDoCheck : Called during every change detection run.

ngAfterContentInit : Called after content (ng-content) has been projected view.

ngAfterViewInit : Called after the component's view (and child views) has been initialized.

ngAfterViewChecked : Called every time the view (and child views) have been checked.

ngOnDestroy : Called once the component is about to be destroyed.





















