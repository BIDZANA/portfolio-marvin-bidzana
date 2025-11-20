/*import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { isPlatformBrowser } from '@angular/common';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  // Données pour le graphique
  isBrowser = false;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public radarChartOptions: ChartOptions<'radar'> = {
    responsive: true,
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14,
            weight: 'bold'
          },
          color: 'white'
        },
        angleLines: { color: 'rgba(255,255,255,0.2)' },
        grid: { color: 'rgba(255,255,255,0.2)' },
        ticks: { display: false }
      }
    },
    plugins: { legend: { labels: { color: 'white' } } }
  };
  public radarChartLabels: string[] = ['Angular', 'TypeScript', 'Tailwind CSS', 'UI/UX', 'Backend (Node.js)', 'Git'];
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      {
        data: [90, 85, 95, 75, 60, 80],
        label: 'Maîtrise',
        backgroundColor: 'rgba(99, 102, 241, 0.4)',
        borderColor: 'rgb(99, 102, 241)',
        pointBackgroundColor: 'rgb(99, 102, 241)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 102, 241)'
      }
    ]
  };
  public radarChartType: 'radar' = 'radar';
}
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  skills: string[];
  icon: string; // Classe pour une icône (emoji pour l'instant pour faire simple)
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css' // Si tu as du CSS spécifique, sinon on utilise Tailwind
})
export class Skills {
  
  // Données extraites de ton CV [cite: 1]
  skillCategories: SkillCategory[] = [
    {
      name: 'Langages',
      icon: '💻',
      skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C#', 'SQL', 'C++'] // [cite: 3]
    },
    {
      name: 'Frameworks & Libs',
      icon: '🛠️',
      skills: ['Angular', 'Spring Boot', 'React', 'Flutter', 'Node.js'] // [cite: 4]
    },
    {
      name: 'DevOps & Cloud',
      icon: '☁️',
      skills: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'AWS', 'Jenkins', 'SonarQube', 'Git'] // [cite: 6]
    },
    {
      name: 'Bases de Données',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'NoSQL'] // [cite: 13]
    },
    {
      name: 'Tests & Qualité',
      icon: '✅',
      skills: ['JUnit', 'Cypress', 'Selenium'] // [cite: 11]
    },
    {
      name: 'Méthodologies & IA',
      icon: '🧠',
      skills: ['Agile Scrum', 'API REST', 'DDD', 'MLOps (Bases)', 'Prompt Engineering'] // [cite: 7, 9]
    }
  ];
}