import { Component, Inject, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMenuOpen = false;
  isLightTheme = false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    if (this.isLightTheme) {
      this.renderer.addClass(this.document.body, 'light-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'light-theme');
    }
  }
}