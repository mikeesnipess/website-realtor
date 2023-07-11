import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <!-- <app-header></app-header> -->

    <app-home></app-home>

    <!-- routes get injected here -->
    <router-outlet></router-outlet>


   
    <app-footer></app-footer>
  `,
  styles: []
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try-website-realtor';
}
