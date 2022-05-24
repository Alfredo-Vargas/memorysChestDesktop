import { Injectable } from '@angular/core';
import { Photo} from './photo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: Array<Photo> = [];
  singlePhoto: Photo;

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<Array<Photo>> {
    const url = 'http://localhost:3000/photos';
    return this.httpClient.get<Array<Photo>>(url);
  }

  getPhoto(id: number): Photo {
    this.getPhotos().subscribe(
      response => {
        // this.photos = response.handsetPhotos;
        const photo = this.photos.find(
          (p) => {
            return p.id === id;
          }
        );
        this.singlePhoto = photo;
      }
    )
    return this.singlePhoto;
  }
}
