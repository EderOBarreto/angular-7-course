import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedPage = 'recipes';
  constructor() { }

  ngOnInit() {
  }

  onRecipesPage() {
    this.selectedPage = 'recipes';
  }

  onShoppingPage() {
    this.selectedPage = 'shopping';
  }

}
