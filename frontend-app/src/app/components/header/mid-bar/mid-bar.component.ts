import { Component } from '@angular/core';
import { MidBarProductsComponent } from './mid-bar-products/mid-bar-products.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-mid-bar',
  standalone: true,
  imports: [MidBarProductsComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './mid-bar.component.html',
  styleUrl: './mid-bar.component.css'
})
export class MidBarComponent {

}
