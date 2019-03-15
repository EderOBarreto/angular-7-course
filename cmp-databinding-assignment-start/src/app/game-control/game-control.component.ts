import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() emitter = new EventEmitter<number>();
  counter = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.emitter.emit(this.counter += 1);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
