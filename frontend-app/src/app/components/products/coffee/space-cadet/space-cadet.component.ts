import { Component } from '@angular/core';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';

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

  itemImgURL: string = "assets/images/space-coffee-cropped.png"
  itemTitle: string = "Space Cadet";
  itemDescriptionSmall: string = "Space Cadet is a dark roast with a taste that’s out of this world. Its rich, bold flavor will launch your taste buds into orbit, making every sip an adventure! 🚀";
  itemAttributesBasic: string[] = ["Bold","Dark", "400g"];
  itemPrice: number = 22.99;

}
