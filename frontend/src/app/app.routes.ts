import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HombreComponent } from './pages/productos/hombre/hombre.component';
import { MujerComponent } from './pages/productos/mujer/mujer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [

    {path: '', component: InicioComponent, title: 'Inicio'},
    {path: 'inicioSesion', component:LoginComponent, title:'InicioSesión'},
    {path: 'ordenes', component: OrdenesComponent, title: 'Ordenes'},
    {path: 'productos', component: ProductosComponent, title: 'Productos', children: [
        {path: 'hombre', component: HombreComponent, title: 'Hombre'},
        {path: 'mujer', component: MujerComponent, title: 'Mujer'}
    ]},
    {path: 'Registro', component: RegistroComponent, title: 'Registro'},
    {path: '**', component: NotFoundComponent, title: 'Error 404'}


];
