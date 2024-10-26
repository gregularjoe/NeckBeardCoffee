import { Component, Input } from '@angular/core';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';
import { CoffeeService } from '../../../../shared/services/products/coffee/coffee-data.service';

@Component({
  selector: 'app-flow-pow',
  standalone: true,
  imports: [
    ItemListingComponent
  ],
  templateUrl: './flow-pow.component.html',
  styleUrl: './flow-pow.component.css'
})
export class FlowPowComponent {

  itemObject!: any;
  name: string = "Flow Pow"

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