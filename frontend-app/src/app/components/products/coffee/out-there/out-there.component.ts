import { Component } from '@angular/core';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';

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

  itemImgURL: string = "assets/images/out-there-coffee-cropped.png"
  itemTitle: string = "Out There";
  itemDescriptionSmall: string = "'Out There' is an daringly light blend that takes your taste buds on a journey. This unique coffee is perfect for those who crave a little excitement in their cup. ⛰️";
  itemAttributesBasic: string[] = ["Nutty","Light", "400g"];
  itemPrice: number = 21.99;

}
