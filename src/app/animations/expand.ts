import { trigger, state, animate, transition, style } from '@angular/animations';

export const expandAnimation =
    trigger('expandAnimation', [
      state('active', style({
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
      })),
      state('inactive', style({
        left: '50%',
        right: '50%',
        top: '50%',
        bottom: '50%',
      })),
      transition('inactive => active', animate('600ms ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]);
