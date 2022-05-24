export class Photo {
  id: number;
  img: string;
  geolocation: string;
  camera: string;
  dateTaken: Date;
  cols: number;
  rows: number;

  constructor() {
    this.id = -1;
    this.geolocation = '';
    this.camera = '';
    this.img = '';
    this.dateTaken = new Date();
  }
}
