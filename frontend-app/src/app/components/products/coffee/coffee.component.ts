import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css'
})
export class CoffeeComponent {

}
