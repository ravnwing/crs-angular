import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DishService } from './services/dish.service'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatIconModule,
  MatProgressSpinnerModule, MatDialogModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
    MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatIconModule,
    MatProgressSpinnerModule, MatDialogModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'home',  component: HomeComponent },
      { path: 'menu',     component: MenuComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
