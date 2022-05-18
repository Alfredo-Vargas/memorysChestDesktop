import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PhotosService } from '../photos.service';
import { Photo} from '../photo.model';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [];
  photos: Photo[] = [];
  photosForHandSet: Photo[] = [];
  photosForWeb: Photo[] = [];

  isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,
              private photosService: PhotosService) {}

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );

  ngOnInit(){

  }

}
