import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpaceCadetComponent } from "./space-cadet/space-cadet.component";

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [RouterOutlet, SpaceCadetComponent,SpaceCadetComponent],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css'
})
export class CoffeeComponent {

}
