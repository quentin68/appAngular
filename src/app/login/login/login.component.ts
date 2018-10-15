import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Credential = {login: 'freezeburger', password: 'orsys@orsys'};

  constructor(private us: UsersService, private router: Router) { }

  ngOnInit() {}

  connectUser() {
    this.us.login(this.user)
          .then( res => {
            this.router.navigate(['/chat', 1]);
           })
          .catch( res => console.log(res) );
  }

}
