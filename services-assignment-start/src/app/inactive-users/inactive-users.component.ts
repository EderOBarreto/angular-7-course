import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../UsersService.service';
import { CounterService } from '../CounterService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  @Output() counter = new EventEmitter<number>();

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
