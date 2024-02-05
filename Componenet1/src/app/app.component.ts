import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MarvellousComponent} from './marvellous/marvellous.component';//he blur dista agodar bcz he ajun use gelaa nahi mhanun he use kelaa kii dark hoeil
import { InfosystemsComponent } from './infosystems/infosystems.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MarvellousComponent,InfosystemsComponent],//ithe use kelaa varchaa import tyavelii dark zala ithe use apan
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Componenet1';
}
