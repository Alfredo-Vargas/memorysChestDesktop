import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';

const routes: Routes = [
  { path: 'photos', component: HomeComponent, children: [
    {path: ':id', component: SinglePhotoComponent },
    {path: ':id/edit', component: EditComponent },
    {path: 'create', component: SinglePhotoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
