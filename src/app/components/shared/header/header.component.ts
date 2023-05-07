import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/servicio/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private oSessionService: SessionService,
    private oRouter: Router,

  ) { }

  ngOnInit(): void {
  }
  logIn(){
    const loginData = { login: "admin", password: "admin" };
    this.oSessionService.login(JSON.stringify(loginData)).subscribe(data => {
      localStorage.setItem("user", JSON.stringify(data.toString()));
    });
  }

  logOut(){
    this.oSessionService.logout().subscribe(data => {
      localStorage.clear();
      this.oRouter.navigate([""]);
    });
  }

}
