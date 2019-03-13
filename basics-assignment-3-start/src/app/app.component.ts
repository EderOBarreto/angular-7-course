import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .textWhite{ 
      color: white;
    }
  `]
})
export class AppComponent {
  isVisible : boolean = false;
  clicks = [];

  showDetails(){
    this.isVisible = !this.isVisible;
    this.clicks.push(this.clicks.length + 1);
  }

  getClicks(){
    return this.clicks;
  }
}
