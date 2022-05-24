import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PhotosService } from '../photos.service';
import { Photo} from '../photo.model';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: Array<Photo> = [];
  photosForHandSet: Array<Photo> = [];
  photosForWeb: Array<Photo> = [];
  isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver,
              private photosService: PhotosService) {}

  /** Based on the screen size, switch from standard to one column per row */
  // This observable is the one in charge of the responsiveness
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );

  ngOnInit(){
    // Subscription to changes in the viewport for responsiveness
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;  // gets the current viewport stat (either Handset mode or webmode)
      this.loadCards();
    });
    this.photosService.getPhotos().subscribe(
      response => {
        this.photosForHandSet = response.handsetPhotos;
        this.photosForWeb = response.webPhotos;
        this.loadCards();
      },
      error => {
        alert('There was an erro in receiving data from server. Please review that the URL was correctly given');

      }
    )
  }

  loadCards(): void {
    this.photos = this.isHandset? this.photosForHandSet : this.photosForWeb;
  }

  getFigure(figureName: string): string {
    return 'url(' + 'http://localhost:3000/images/' + figureName + '.jpg' + ')';
  }

}
