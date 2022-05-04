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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}

//TODO:
// (1) Study Observables, what are breakpoints, how do they work?
// The navigation component template: (nav.component.html)
// (2) isHandset$ | async === true or false. Depending on the size! (Reponsiveness!)
// Answer: isHandset is the mobile layout!
// (3) fixedInViewport <-- to get the size properties of the component
// (4) How isHandset$ and async work?
// (5) Study the map(result => result.matches)
// (6) How breakpointObserver work as media queries?
