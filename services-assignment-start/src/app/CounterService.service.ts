import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root'})
export class CounterService {

    private activeToInactiveCounter = 0;
    private inactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log(this.activeToInactiveCounter);
    }

    incrementInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log(this.inactiveToActiveCounter);
    }
}
