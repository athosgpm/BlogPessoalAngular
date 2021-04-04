import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './BackEndAPI/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogPessoalAngular';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/entrar'])
    }
  }
}
