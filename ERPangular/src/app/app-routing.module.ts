import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { ContactoComponent } from './components/contacto/contacto.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { InicioComponent } from './components/inicio/inicio.component'


const routes: Routes = [
    {path:'', component: InicioComponent},
    {path:'ingreso', component: IngresoComponent},
    {path:'crear-mensage', component: ContactoComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
