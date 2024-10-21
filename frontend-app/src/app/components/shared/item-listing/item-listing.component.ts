import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-item-listing',
  standalone: true,
  imports: [
    CommonModule,
    MatButton
  ],
  templateUrl: './item-listing.component.html',
  styleUrl: './item-listing.component.css'
})
export class ItemListingComponent {

  @Input() itemImgURL!: string;
  @Input() itemTitle!: string;
  @Input() itemDescriptionSmall!: string;
  @Input() itemAttributesBasic!: string[];
  @Input() itemPrice!: number;

}
