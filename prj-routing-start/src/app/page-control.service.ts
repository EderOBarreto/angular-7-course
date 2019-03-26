import { Injectable, EventEmitter } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PageControlService {
    private loadedFeature = 'recipe';
    featureChanged = new EventEmitter<string>();

    setLoadedFeature(loadedFeature: string) {
        this.loadedFeature = loadedFeature;
        this.featureChanged.emit(this.loadedFeature);
    }

    getLoadedFeature() {
        return this.loadedFeature;
    }
}