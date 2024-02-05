import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <h1>Welcome In Assignment No 06</h1>
  <h2>Name :<input type ="text"></h2>
  
  <h2>Marvellous </h2>

  <router-outlet></router-outlet>
  `,
  styles: [`h2{color : blue}`]
})
export class AppComponent {
  title = 'Assignment6';
}
