import { Component, Input } from '@angular/core';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';
import { CoffeeService } from '../../../../shared/services/products/coffee/coffee-data.service';


@Component({
  selector: 'app-oh-my-days',
  standalone: true,
  imports: [
    ItemListingComponent
  ],
  templateUrl: './oh-my-days.component.html',
  styleUrl: './oh-my-days.component.css'
})
export class OhMyDaysComponent {

  itemObject!: any;
  name: string = "Oh My Days"

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
