import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      shareReplay() // to avoid retransmit the whole pipe if another observer wants to retrieve this observable
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}

//References:

// (1) Breakpoints are the triggers in Material for how your layout responsive changes across device or viewport sizes.
// Ref. https://material.angular.io/cdk/layout/api

// The navigation component template: (nav.component.html)
// (2) isHandset$ | async === true or false. Depending on the size! (Reponsiveness!)
// The async pipe gets the latest value of an observable

// (5) Map(result => result.matches) Map: pass to result to another observable
