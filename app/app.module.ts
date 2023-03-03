import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './shared/filter.pipe';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MovieNameFilterPipe } from './shared/movie-name-filter.pipe';

// import { AngularFontAwesomeComponent } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AdminMovieComponent,
    MovieNameFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
    
    // AngularFontAwesomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
