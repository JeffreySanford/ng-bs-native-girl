import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state } from '@angular/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { RightNavigationComponent } from './right-navigation/right-navigation.component';

import { ViewComponent } from './views/view.component';
import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/about/about.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { GalleryItemComponent } from './views/gallery/gallery-item.component';
import { ContactComponent } from './views/contact/contact.component';



const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery',
    component: GalleryComponent
  },
  { path: 'gallery/:id', component: GalleryItemComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
{ path: '*', redirectTo: '/landing', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    RightNavigationComponent,
    ViewComponent,
    LandingComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    GalleryItemComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
