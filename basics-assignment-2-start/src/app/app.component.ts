import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username : string = '';
  isEmpty : boolean = true;
  
  onCreateUser(event : Event){
    this.isEmpty = (this.username === '');
  }

  sendUserName(){
    this.username = '';
  }

}
