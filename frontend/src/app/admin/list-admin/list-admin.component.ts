import { Component OnInit } from '@angular/core';

@Component({
  selector: 'app-list-admin',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mt-lg-auto">
          <h1>ADMIN LIST</h1>
        </div>
      </div>
    </div>
  `,
   styleUrl: './list-admin.component.css'
})  
export class ListAdminComponent implements OnInit {

   constructor() { }
 
  ngOnInit(): void {
  }
}
