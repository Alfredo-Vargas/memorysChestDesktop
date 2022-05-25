import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePhotoComponent } from './create-photo/create-photo.component';
import { EditComponent } from './edit/edit.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';

const routes: Routes = [
  { path: 'photos', component: HomeComponent, children: [
    {path: 'create', component: CreatePhotoComponent },
    {path: ':id', component: SinglePhotoComponent },
    {path: ':id/edit', component: EditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
