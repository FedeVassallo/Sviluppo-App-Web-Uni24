import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
      <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mt-lg-auto">
          <h1>HOME PAGE</h1>
        </div>
      </div>
    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
