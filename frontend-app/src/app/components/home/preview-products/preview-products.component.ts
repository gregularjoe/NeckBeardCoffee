import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-preview-products',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './preview-products.component.html',
  styleUrl: './preview-products.component.css'
})
export class PreviewProductsComponent {

}
