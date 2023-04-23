import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsComponentComponent } from './components/locations-component/locations-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TopAdvComponent } from './components/advertisements/top-adv/top-adv.component';
import { SectionsComponent } from './components/sections/sections.component';
import { CorouselDirective } from './directives/corousel.directive';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponentComponent,
    ToolbarComponent,
    HomeComponent,
    TopAdvComponent,
    SectionsComponent,
    CorouselDirective,
    SideNavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
