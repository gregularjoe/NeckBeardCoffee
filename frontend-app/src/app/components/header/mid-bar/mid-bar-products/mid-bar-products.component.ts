import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mid-bar-products',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './mid-bar-products.component.html',
  styleUrl: './mid-bar-products.component.css'
})
export class MidBarProductsComponent {

}
