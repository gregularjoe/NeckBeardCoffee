import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ICoffee } from '../../shared/interfaces/icoffee';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIcon
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  itemObjectArray: any[] = [
    {
      id: 0,
      itemTitle: "Java",
      itemUrl: "/java-coffee",
      itemImgUrl: "assets/images/coffee-cropped.png",
      itemDescSmall: "Java - Medium Roast Coffee - 400g",
      itemDescMed: "Our flagship blend, simply called “JavaTM,” offers a rich and robust flavor profile that embodies the essence of premium coffee beans.🍵",
      itemAttrBasic: ["Rich","Medium", "400g"],
      itemPrice: 18.99,
      quantity: 10,
      isInStock: true,
      purchaseQuantity: 2
    },
    {
      id: 3,
      itemTitle: "Out There",
      itemUrl: "/out-there",
      itemImgUrl: "assets/images/out-there-coffee-cropped.png",
      itemDescSmall: "Out There - Exotic, Light Roast - 400g",
      itemDescMed: "'Out There' is an daringly light blend that takes your taste buds on a journey. This unique coffee is perfect for those who crave a little excitement in their cup. ⛰️",
      itemAttrBasic: ["Exotic","Light", "400g"],
      itemPrice: 21.99,
      quantity: 10,
      isInStock: true,
      purchaseQuantity: 1
    },
    {
      id: 4,
      itemTitle: "Space Cadet",
      itemUrl: "/space-cadet",
      itemImgUrl: "assets/images/space-coffee-cropped.png",
      itemDescSmall: "Space Cadet - Bold, Dark Roast - 400g",
      itemDescMed: "Space Cadet is a dark roast with a taste that’s out of this world. Its rich, bold flavor will launch your taste buds into orbit, making every sip an adventure! 🚀",
      itemAttrBasic: ["Bold","Dark", "400g"],
      itemPrice: 22.99,
      quantity: 10,
      isInStock: true,
      purchaseQuantity: 3
    }
  ];
  itemObject!: any;
  purchaseQuantity!: number

  constructor() {}


  removeFromCart(item: ICoffee) {
   this.itemObjectArray = this.itemObjectArray.filter(obj => obj !== item);
   console.log(this.itemObjectArray)
  }
}
