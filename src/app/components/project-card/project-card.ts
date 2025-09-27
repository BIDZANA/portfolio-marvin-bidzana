import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() project!: Project;
}
