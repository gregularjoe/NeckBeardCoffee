import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreviewCoffeeComponent } from './preview-coffee/preview-coffee.component';

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [RouterOutlet, PreviewCoffeeComponent],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css'
})
export class CoffeeComponent {

}
