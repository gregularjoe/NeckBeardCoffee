import { Component, HostListener, OnInit } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MidBarComponent } from './mid-bar/mid-bar.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent, TopBarComponent, MidBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navMenu: any;
  originalNavMenuOffsetTop!: number;

  ngOnInit() {
    this.navMenu = document.getElementById('navMenu');
    this.originalNavMenuOffsetTop = this.navMenu.offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > this.originalNavMenuOffsetTop) {
      this.navMenu.classList.add('sticky');
    } else {
      this.navMenu.classList.remove('sticky');
    }
  }
}