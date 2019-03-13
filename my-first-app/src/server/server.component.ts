import { Component } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    //the selector is used to specify the HTML tag that will be used
    selector: 'app-server',
    // the templateUrl is used to specify the url of the HTML file that will be loaded
    templateUrl: './server.component.html',
    styles:[`
        .online{
            color: white;
        }
    `]
})

export class ServerComponent { 
    serverId : number = 10;
    serverStatus : string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; 
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getcolor(){
        return this.serverStatus === 'online' ? '#0F0' :'#F00';
    }
}