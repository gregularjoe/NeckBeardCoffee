import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';
import { CoffeeService } from '../../../../shared/services/products/coffee/coffee-data.service';

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

  // itemObject!: object;

  itemImgUrl!: string;
  itemTitle!: string;
  itemDescriptionSmall!: string;
  itemAttributesBasic!: string[];
  itemPrice!: number;

  // [itemImgUrl]= "itemImgURL"
  // [itemTitle]= "itemTitle"
  // [itemDescriptionSmall]= "itemDescriptionSmall"
  // [itemAttributesBasic]= "itemAttributesBasic"
  // [itemPrice]= "itemPrice"

  constructor(private coffeeDataService: CoffeeService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.coffeeDataService.getCoffee().subscribe(resp => {
      // this.itemObject = resp;
      console.log("java comp:", resp)
      this.itemTitle = resp[0].itemTitle;
      this.itemImgUrl = resp[0].itemImgUrl;
      this.itemPrice = resp[0].itemPrice;
      this.itemDescriptionSmall = resp[0].itemDescriptionSmall;
      this.itemAttributesBasic = resp[0].itemAttributesBasic;
      this.itemPrice = resp[0].itemPrice;
    });
  }





}
