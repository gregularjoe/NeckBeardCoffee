import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-preview-coffee',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './preview-coffee.component.html',
  styleUrl: './preview-coffee.component.css'
})
export class PreviewCoffeeComponent {

}
