import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { NavigationExtras } from '@angular/router';
import { Router } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username = 'test';
  public password = 'test';

  constructor(
    private backendService: BackendService,
    private router: Router
  ) { }

  async login() {
    /*const user =*/await this.backendService.login(this.username, this.password);
    const extras = { clearHistory: true } as NavigationExtras;

    this.router.navigate(['/tickets'], extras);
  }
}
