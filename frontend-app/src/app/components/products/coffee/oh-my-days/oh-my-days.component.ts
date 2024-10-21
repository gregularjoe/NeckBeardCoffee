import { Component } from '@angular/core';
import { ItemListingComponent } from '../../../shared/item-listing/item-listing.component';

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

  itemImgURL: string = "assets/images/oh-my-days-coffee-cropped.png"
  itemTitle: string = "Oh My Days";
  itemDescriptionSmall: string = "'Oh My Days' is a well balanced , reserved , medium blend with hints of toasted nuts and caramel, perfect for a refined coffee experience. ⚖️";
  itemAttributesBasic: string[] = ["Balanced","Medium", "400g"];
  itemPrice: number = 23.99;

}
