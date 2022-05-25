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
    this.photo = this.photosService.getPhoto(0);

    this.route.paramMap.subscribe((params: Params) => {
      console.log("Reading the parameter with id: ", params.get('id'));
      this.photo = this.photosService.getPhoto(+params.get('id'));
    });
    console.log("The current photo is: ", this.photo);
    // this.router.navigate(['photos',this.photo.id]);
  }

  getFigure(photo: Photo): string {
    // return 'url(' + 'http://localhost:3000/images/' + photo.img + '.jpg' + ')';
    return 'http://localhost:3000/images/' + photo.img + '.jpg';
  }
  onEditPhoto(photo: Photo): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
