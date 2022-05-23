import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserEntity } from 'src/app/domain/entity/user-entity';
import { AuthService } from 'src/app/infra/auth/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    console.log('teste');
  }

  get usuario(): UserEntity {
    return this.authService.credentials;
  }

  logout() {
    // this.usuarioController.logout()
    // .subscribe(() => this.responseLogout());
  }

  responseLogout()  {
    this.authService.credentials = {};
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

}
