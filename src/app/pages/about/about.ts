import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  type: 'work' | 'education' | 'volunteer';
  side: 'left' | 'right';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  
  timelineEvents: TimelineEvent[] = [
    {
      date: 'Jan 2025 - Aujourd\'hui',
      title: 'Développeur Mobile Flutter (Bénévolat)',
      company: 'APCAF',
      description: 'Développement d\'une application mobile de gestion des dons et intentions de prières. UI/UX sous Figma, intégration Firebase et déploiement.',
      tags: ['Flutter', 'Firebase', 'Figma', 'Mobile'],
      type: 'volunteer',
      side: 'left'
    },
    {
      date: 'Mars 2024 - Sept 2024',
      title: 'Développeur Fullstack Java / Angular',
      company: 'Sopra Steria (pour COVEA)',
      description: 'Conception et implémentation d\'une application de gestion de machines virtuelles. Mise en place de pipelines CI/CD et travail en Agile.',
      tags: ['Angular', 'Spring Boot', 'CI/CD', 'Agile'],
      type: 'work',
      side: 'right'
    },
    {
      date: 'Oct 2023 - Déc 2024',
      title: 'Développeur Frontend Angular',
      company: 'Motyasi',
      description: 'Développement d\'une plateforme web de transport collaboratif. Conception UI/UX responsive et intégration d\'API REST.',
      tags: ['Angular', 'API REST', 'GitLab', 'UI/UX'],
      type: 'work',
      side: 'left'
    },
    {
      date: '2018 - 2024',
      title: 'Diplôme d\'Ingénieur Informatique',
      company: 'EPF - École d\'Ingénieurs',
      description: 'Double diplôme en Informatique et Systèmes d\'Information. Formation généraliste avec spécialisation technique.',
      tags: ['Ingénierie', 'Systèmes d\'Info'],
      type: 'education',
      side: 'right'
    },
    {
      date: 'Mars 2022 - Sept 2023',
      title: 'Développeur Fullstack Java / Flutter',
      company: 'Yamo Group',
      description: 'Refonte d\'une application de gestion de stocks. Migration PHP vers Java Spring Boot (Microservices) et interfaces Flutter.',
      tags: ['Java', 'Flutter', 'Microservices', 'Migration'],
      type: 'work',
      side: 'left'
    }
  ];

  // Helper pour récupérer l'icône selon le type
  getIcon(type: string): string {
    switch(type) {
      case 'work': return '💼';
      case 'education': return '🎓';
      case 'volunteer': return '❤️';
      default: return '📅';
    }
  }

  // Helper pour la couleur de fond de l'icône
  getIconBgColor(type: string): string {
    switch(type) {
      case 'work': return 'bg-indigo-600';
      case 'education': return 'bg-emerald-600';
      case 'volunteer': return 'bg-rose-500';
      default: return 'bg-gray-600';
    }
  }
}