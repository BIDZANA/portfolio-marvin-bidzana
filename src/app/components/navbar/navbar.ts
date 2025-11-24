import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important pour *ngIf et ngClass
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  isMobileMenuOpen = false;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Cette méthode sert à fermer le menu quand on clique sur un lien
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}