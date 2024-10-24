import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
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

  // @Input() itemObject!: any;

  // ***** TRY PASSING THE OBJECT AGAIN BUT AS A SUBJECT *****

   @Input()itemImgUrl!: string;
   @Input()itemTitle!: string;
   @Input()itemDescriptionSmall!: string;
   @Input()itemAttributesBasic!: string[];
   @Input()itemPrice!: number;

  // itemImgUrl!: string;
  // itemTitle!: string;
  // itemDescriptionSmall!: string;
  // itemAttributesBasic!: string[];
  // itemPrice!: number;

  constructor(private cdr: ChangeDetectorRef) {}



}
