import { Injectable } from '@angular/core';
import { Photo} from './photo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: Array<Photo> = [];

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<any> {
    const url = 'http://localhost:3000/photos';
    return this.httpClient.get<any>(url);
  }

  photos = this.getPhotos();

  getBook(id: number): Photo {
    const photo = this.photos.find(
      (b) => {
        return b.id === id;
      }
    );
    return photo;
  }
}
