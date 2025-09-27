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
      description: 'Développement de mon portfolio en utilisant Angular 18 et Tailwind CSS.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Projet de E-commerce',
      description: 'Une boutique en ligne fictive construite avec un backend Node.js et une API REST.',
      image: 'https://via.placeholder.com/600x400',
      link: '#',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB']
    }
  ];
}
