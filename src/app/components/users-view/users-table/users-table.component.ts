import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() data: User[] = [];
  @Input() loading = false;
  displayedColumns = ['id', 'name', 'email', 'department', 'operations'];
}
