import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { MediaComponent } from './media/media.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ministries', component: MinistriesComponent },
  { path: 'media', component: MediaComponent},
  { path: 'events', component: EventsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryComponent},

  // { path: 'give', component: GiveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
