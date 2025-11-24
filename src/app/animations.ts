import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    // 1. On prépare les pages (l'ancienne et la nouvelle)
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),

    // 2. État initial de la NOUVELLE page (Enter)
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }) // Elle est un peu plus bas et invisible
    ], { optional: true }),

    // 3. On lance les animations en parallèle (Group)
    group([
      // L'ancienne page disparaît (Fade Out)
      query(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ], { optional: true }),

      // La nouvelle page apparaît et remonte (Fade In + Slide Up)
      query(':enter', [
        animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true })
    ])
  ])
]);