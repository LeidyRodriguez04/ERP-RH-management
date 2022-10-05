import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    IngresoComponent,
    ContactoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
=======
    ReactiveFormsModule
>>>>>>> 3a1e8c093348b9fed55f2497b15d0fefcde231a6
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
