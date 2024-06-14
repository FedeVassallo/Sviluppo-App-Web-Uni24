import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a href="/" class="navbar-brand">Frontend Menu'</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact">Contact</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Member
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/register">Register</a>
                <a class="dropdown-item" href="/login">Login</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor() { }
  
  ngOnInit(): void {
  }

}
