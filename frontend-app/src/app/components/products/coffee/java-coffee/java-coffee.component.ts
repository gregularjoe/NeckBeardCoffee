import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';

@Component({
  selector: 'app-java-coffee',
  standalone: true,
  imports: [
    ItemListingComponent,
    CommonModule,
    MatButton,
    MatInput,
    MatFormField
  ],
  templateUrl: './java-coffee.component.html',
  styleUrl: './java-coffee.component.css'
})

export class JavaCoffeeComponent {

  itemImgURL: string = "assets/images/coffee-cropped.png"
  itemTitle: string = "Java";
  itemDescriptionSmall: string = "Our flagship blend, simply called “CoffeeTM,” offers a rich and robust flavor profile that embodies the essence of premium coffee beans.🍵";
  itemAttributesBasic: string[] = ["Rich","Medium", "400g"];
  itemPrice: number = 18.99;

  constructor() {}





}
