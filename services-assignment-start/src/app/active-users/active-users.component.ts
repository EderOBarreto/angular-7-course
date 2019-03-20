import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../UsersService.service';
import { CounterService } from '../CounterService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  @Output() counter = new EventEmitter<number>();

  constructor(private usersServer: UsersService) {}

  ngOnInit() {
    this.users = this.usersServer.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersServer.setToInactive(id);
  }
}
