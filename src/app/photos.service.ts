import { Injectable } from '@angular/core';
// import { Photo} from './photo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<any> {
    const url = 'http://localhost:3000/photos';
    return this.httpClient.get<any>(url);
  }
}
