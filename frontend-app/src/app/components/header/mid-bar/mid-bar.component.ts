import { Component } from '@angular/core';
import { MidBarProductsComponent } from './mid-bar-products/mid-bar-products.component';


@Component({
  selector: 'app-mid-bar',
  standalone: true,
  imports: [MidBarProductsComponent],
  templateUrl: './mid-bar.component.html',
  styleUrl: './mid-bar.component.css'
})
export class MidBarComponent {

}
