import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './author/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    AuthorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
