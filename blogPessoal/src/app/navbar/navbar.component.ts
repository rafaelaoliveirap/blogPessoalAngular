import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mostrarLogin: boolean = false;
  constructor(public auth: AuthService, private router: Router) { }
 
  ngOnInit(): void {
  }
exibirLogin(){
  this.mostrarLogin = true;
}
  sair(){
    this.router.navigate(['home']);
    localStorage.clear();
  }
}
