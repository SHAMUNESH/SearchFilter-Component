import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';

const routes: Routes = [
  { path : 'adminMovie', component: AdminMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
