import { Component } from '@angular/core';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';

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

  itemImgURL: string = "assets/images/flower-power-coffee-cropped.png"
  itemTitle: string = "Flow Pow";
  itemDescriptionSmall: string = "'Flower Power' is a vibrant blend with floral and citrus notes, offering a refreshing and aromatic experience, perfect for those who enjoy a lively and fragrant cup. 🌻";
  itemAttributesBasic: string[] = ["Citrus","Light", "400g"];
  itemPrice: number = 20.99;


}
