import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';
import { CoffeeService } from '../../../../shared/services/products/coffee/coffee-data.service';
import { ICoffee } from '../../../../shared/interfaces/icoffee';

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

  itemObject!: any;
  name: string = "Java";

  itemImgUrl!: string;
  itemTitle!: string;
  itemDescMed!: string;
  itemAttrBasic!: string[];
  itemPrice!: number;

  // [itemImgUrl]= "itemImgUrl"
  // [itemTitle]= "itemTitle"
  // [itemDescMed]= "itemDescMed"
  // [itemAttrBasic]= "itemAttrBasic"
  // [itemPrice]= "itemPrice"

  constructor(private coffeeDataService: CoffeeService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.coffeeDataService.getCoffee().subscribe(resp => {
      console.log("java comp:", resp)
      this.itemObject = resp.find(obj => obj.itemTitle === this.name);
    });
  }





}
