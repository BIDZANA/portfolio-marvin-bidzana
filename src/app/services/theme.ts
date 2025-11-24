import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // On utilise un Signal pour gérer l'état (vrai = sombre, faux = clair)
  darkModeSignal = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Vérification pour éviter les erreurs si tu fais du SSR (Server Side Rendering)
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
    }
  }

  // Initialisation au démarrage
  private initTheme() {
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      // Si une préférence est sauvegardée, on l'utilise
      this.setDarkMode(storedTheme === 'dark');
    } else {
      // Sinon, on regarde la préférence du système d'exploitation
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(systemPrefersDark);
    }
  }

  // Méthode pour basculer le thème (appelée par le bouton)
  toggleTheme() {
    this.setDarkMode(!this.darkModeSignal());
  }

  // Méthode interne pour appliquer les changements
  private setDarkMode(isDark: boolean) {
    this.darkModeSignal.set(isDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}