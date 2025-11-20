import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProjectCard } from '../../components/project-card/project-card';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard, NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Mon Portfolio',
      description: 'Développement de mon portfolio personnel en Angular 18 et Tailwind CSS pour présenter mes projets et expériences professionnelles.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Application Gestion Salons',
      description: 'Application web pour la gestion de salons professionnels : génération de QR Codes, suivi des visites et analyse des données. Projet tutoré interne à l’EPF pour Mme Agnès Auclair.',
      image: 'https://via.placeholder.com/600x400',
      link: 'https://gitlab.com/marvinbidzana/gestion-salons',
      technologies: ['Angular 18', 'Firebase', 'TypeScript', 'Firestore']
    },
    {
      title: 'Application 118-218',
      description: 'Outil interne de gestion et de suivi des postes de travail attribués par les clients, développé durant mon stage chez Sopra Steria (agence du Mans).',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL']
    },
    {
      title: 'Plateforme MOTYASI',
      description: 'Plateforme de mise en relation pour le transport de colis entre particuliers, développée en équipe de 5 personnes dans un cadre Agile.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      technologies: ['Angular', 'Git', 'Figma', 'Agile']
    },
    {
      title: 'Application APCAF',
      description: 'Application mobile hybride pour gérer les dons et intentions de prière de l’association APCAF. Développée avec Flutter et Firebase.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      technologies: ['Flutter', 'Firebase', 'Stripe', 'GitHub Copilot']
    },
    {
      title: 'Rendora',
      description: 'Application Java avancée de prise de rendez-vous en ligne, développée avec Spring Boot dans une architecture évolutive et modulaire.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      technologies: ['Java', 'Spring Boot', 'REST API', 'MySQL']
    }
  ];
}

