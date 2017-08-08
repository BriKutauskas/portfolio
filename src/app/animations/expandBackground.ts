import { trigger, state, animate, transition, style } from '@angular/animations';

export const expandBackgroundAnimation =
    trigger('expandBackgroundAnimation', [
      state('active', style({
        opacity: 1,
        zIndex: 999
      })),
      state('inactive', style({
        opacity: 0,
        zIndex: -1
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ]);
