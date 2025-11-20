import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hobby {
  title: string;
  description: string;
  icon: string;
  color: string; // Couleur pour le bord ou l'icône
  tags: string[];
}

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css'
})
export class Hobbies {
  
  hobbies: Hobby[] = [
    {
      title: 'Football & Esprit d\'équipe',
      description: 'Défenseur central sur le terrain, j\'applique la même rigueur dans le sport que dans le code. Le football m\'apprend la résilience, la communication sous pression et l\'importance du collectif.',
      icon: '⚽',
      color: 'border-emerald-500',
      tags: ['Compétition', 'Stratégie', 'Collectif']
    },
    {
      title: 'Musique',
      description: 'Grand amateur de musique, j\'apprécie la diversité des genres, allant de la structure complexe du Classique à l\'énergie de la Musique Urbaine. Une source constante d\'inspiration et de concentration.',
      icon: '🎵',
      color: 'border-indigo-500',
      tags: ['Classique', 'Urbaine', 'Créativité']
    },
    {
      title: 'Innovation & Side Projects',
      description: 'Au-delà du code professionnel, j\'aime concevoir mes propres solutions (comme Rendora). J\'explore l\'IA et le Prompt Engineering pour rester à la pointe de la technologie.',
      icon: '🚀',
      color: 'border-rose-500',
      tags: ['Veille Tech', 'Start-up', 'IA']
    }
  ];
}