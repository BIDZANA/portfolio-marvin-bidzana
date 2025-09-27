import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private themeClass = 'dark';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  initTheme() {
    if (typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.renderer.addClass(document.body, storedTheme);
        this.themeClass = storedTheme;
      } else {
        this.renderer.addClass(document.body, this.themeClass);
        localStorage.setItem('theme', this.themeClass);
      }
    }
  }

  toggleTheme() {
    if (this.themeClass === 'dark') {
      this.renderer.removeClass(document.body, 'dark');
      this.renderer.addClass(document.body, 'light');
      this.themeClass = 'light';
    } else {
      this.renderer.removeClass(document.body, 'light');
      this.renderer.addClass(document.body, 'dark');
      this.themeClass = 'dark';
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.themeClass);
    }
  }
}