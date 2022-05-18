export class Photo {
  id: number;
  geolocation: string;
  camera: string;
  img: string;
  dateTaken: Date;

  constructor() {
    this.id = -1;
    this.geolocation = '';
    this.camera = '';
    this.img = '';
    this.dateTaken = new Date();
  }
}
