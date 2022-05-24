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

  getPhotos(): Observable<any> {
    const url = 'http://localhost:3000/photos';
    return this.httpClient.get<any>(url);
  }

  getPhoto(id: number): Photo {
    let url = 'http://localhost:3000/photos/'+ id;
    this.httpClient.get<any>(url).subscribe(
      response => {
        this.singlePhoto = response;
      },
      error => {
        alert('The photo with the given ID was not found.' + error.string);
      }
    );
    return this.singlePhoto;
  }

  updatePhoto(photo: Photo): Observable<Photo> {
    let url = 'http://localhost:3000/photos/' + photo.id;
    console.log("The url for the put request is: ", url);
    return this.httpClient.patch<Photo>(url, photo);
  }
}
