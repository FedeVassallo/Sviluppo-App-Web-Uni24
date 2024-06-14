import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mt-lg-auto">
          <h1>CONTACT PAGE</h1>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      h1{
        color: orange;
        font-size: 15vh;
        font-family: 'Big Shoulders Inline Text', cursive;
      }
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
