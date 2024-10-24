import { Component } from '@angular/core';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';
import { CoffeeService } from '../../../../shared/services/products/coffee/coffee-data.service';

@Component({
  selector: 'app-space-cadet',
  standalone: true,
  imports: [
    ItemListingComponent
  ],
  templateUrl: './space-cadet.component.html',
  styleUrl: './space-cadet.component.css'
})
export class SpaceCadetComponent {

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
      // console.log(this.itemObject)
      this.itemTitle = resp[1].itemTitle;
      this.itemImgUrl = resp[1].itemImgUrl;
      this.itemPrice = resp[1].itemPrice;
      this.itemDescriptionSmall = resp[1].itemDescriptionSmall;
      this.itemAttributesBasic = resp[1].itemAttributesBasic;
      this.itemPrice = resp[1].itemPrice;
    });
  }





}
