import { trigger, state, animate, transition, style } from '@angular/animations';

export const hoverAnimation =
    trigger('hoverAnimation', [
      state('active', style({
        fill: 'url(#endGradient)'
      })),
      state('inactive', style({
        fill: 'url(#startGradient)'
      })),
      transition('inactive <=> active', animate('500ms ease-out'))
    ]);
