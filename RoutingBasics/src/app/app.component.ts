import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { RouterLink } from '@angular/router';//Navigation sathii ya mule click kelaa kii dusarya router vr shift honar
import { HomepageComponent } from './homepage/homepage.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BatchDetailsComponent,BatchListComponent,RouterLink,HomepageComponent,InvalidpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoutingBasics';
}
