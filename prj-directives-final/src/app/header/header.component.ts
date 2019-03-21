import { Component, EventEmitter, Output } from '@angular/core';
import { PageControlService } from '../page-control.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();

  constructor(private pageControlService: PageControlService) {}

  onSelect(feature: string) {
    this.pageControlService.setLoadedFeature(feature);
    // this.featureSelected.emit(feature);
  }
}
