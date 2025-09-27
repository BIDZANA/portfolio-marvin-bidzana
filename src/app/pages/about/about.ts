import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  timelineEvents = [
    {
      title: 'Début de mon aventure',
      description: 'Début de ma formation en développement web et acquisition des bases en HTML, CSS et JavaScript.',
      side: 'right'
    },
    {
      title: 'Premier projet Angular',
      description: 'Développement de mon premier projet client en utilisant Angular et une API RESTful.',
      side: 'left'
    },
    {
      title: 'Maîtrise de Tailwind CSS',
      description: 'Adoption de Tailwind CSS pour un workflow plus rapide et la création de designs personnalisés.',
      side: 'right'
    },
    // Ajoute d'autres événements ici
  ];
}
