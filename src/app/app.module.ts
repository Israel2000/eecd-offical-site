import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodySectionComponent } from './body-section/body-section.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { MediaComponent } from './media/media.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodySectionComponent,
    MinistriesComponent,
    MediaComponent,
    EventsComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
