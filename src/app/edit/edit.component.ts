import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Photo } from '../photo.model';
// import { FormBuilder, FormControl, FormGroup, Validators}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  photo: Photo;

  constructor(private photosService: PhotosService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params)=> {
      this.photo = this.photosService.getPhoto(+params.get('id'));
    })
  }

  getFigure(photo: Photo): string {
    // return 'url(' + 'http://localhost:3000/images/' + photo.img + '.jpg' + ')';
    return 'http://localhost:3000/images/' + photo.img + '.jpg';
  }

  onChangeMetadata(photo: Photo): void {
    this.photosService.updatePhoto(this.photo).subscribe(
      (response: Photo) => {
        console.log("Photo updated:", response);
      }
    );
  }

}
