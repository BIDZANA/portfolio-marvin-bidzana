import { Component, PLATFORM_ID, Inject } from '@angular/core';
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
