import { Component } from '@angular/core';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';
import { CoffeeService } from '../../../../shared/services/products/coffee/coffee-data.service';

@Component({
  selector: 'app-out-there',
  standalone: true,
  imports: [
    ItemListingComponent
  ],
  templateUrl: './out-there.component.html',
  styleUrl: './out-there.component.css'
})
export class OutThereComponent {

  itemObject!: any;
  name: string = "Out There"

  itemImgUrl!: string;
  itemTitle!: string;
  itemDescMed!: string;
  itemAttrBasic!: string[];
  itemPrice!: number;

  constructor(private coffeeDataService: CoffeeService) {}

  ngOnInit() {
    this.fetchData();
  }
  
  fetchData(): void {
    this.coffeeDataService.getCoffee().subscribe(resp => {
      console.log("FlowPow Comp:", resp)
      this.itemObject = resp.find(obj => obj.itemTitle === this.name);
    });
  }





}
