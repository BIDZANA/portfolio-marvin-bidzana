import { Component, signal } from '@angular/core';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router'; // Ajout de ChildrenOutletContexts
import { Navbar } from './components/navbar/navbar';
import { routeAnimations } from './animations'; // Assure-toi que le chemin est bon

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [routeAnimations] 
})
export class App {
  protected readonly title = signal('portfolio-marvin');

  // On injecte le service qui permet de lire les données de la route active
  constructor(private contexts: ChildrenOutletContexts) {}

  // Cette méthode récupère la valeur "data: { animation: '...' }" définie dans app.routes.ts
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}