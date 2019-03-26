import { Component, OnInit } from '@angular/core';
import { PageControlService } from './page-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    loadedFeature;

    constructor(private pageControlService: PageControlService){}

    ngOnInit() {
      this.loadedFeature = this.pageControlService.getLoadedFeature();
      this.pageControlService.featureChanged.subscribe(
        (loadedFeature: string) => {
          this.loadedFeature = loadedFeature;
        }
      );
    }
}
