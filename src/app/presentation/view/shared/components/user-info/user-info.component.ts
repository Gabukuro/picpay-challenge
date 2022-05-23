import { Component, Input, OnInit } from '@angular/core';
import { UserEntity } from 'src/app/domain/interfaces/entity/user-entity';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() user!: UserEntity;

  constructor() {
  }

  ngOnInit(): void {
  }
}
