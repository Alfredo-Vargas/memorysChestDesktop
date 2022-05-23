import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Photo } from '../photo.model';


@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.css']
})
export class SinglePhotoComponent implements OnInit {
  photo: Photo;
  nextId: number = 0;

  constructor(private photosService: PhotosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // this.photo = this.photosService.getPhoto(0);
  }

}
