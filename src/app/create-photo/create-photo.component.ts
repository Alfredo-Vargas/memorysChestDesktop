import { Component, OnInit } from '@angular/core';
import { Photo} from '../photo.model';
import { PhotosService } from '../photos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-photo',
  templateUrl: './create-photo.component.html',
  styleUrls: ['./create-photo.component.css']
})
export class CreatePhotoComponent implements OnInit {
  photo: Photo;
  selectedFile: File;

  constructor(private photosService: PhotosService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.photo = new Photo();
    console.log("ngOnInit create-photo was called");


  }

  onSubmitNewPhoto(): void {
    console.log("Creating a new photo: ", this.photo);
    this.photosService.addNewPhoto(this.photo).subscribe(
      (response) => {console.log("photo added: ", response);},
      (error) => console.log('error: ', error)
    );
    // this.photosService.addNewPhoto(this.photo);
    // we clean the photo variable for next creation
    this.photo = {
      id : 1,
      geolocation : '',
      camera : '',
      img : '',
      dateTaken : new Date(),
      cols : 1,
      rows : 1,
    };
  }
}
