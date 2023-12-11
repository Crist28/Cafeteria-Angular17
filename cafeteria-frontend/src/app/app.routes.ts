import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { StoreComponent } from './pages/store/store.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PerfilComponent } from './pages/usuario/perfil/perfil.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'product', component: ProductsComponent},
    {path: 'store', component: StoreComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    {path: 'cuenta/perfil', component: PerfilComponent},
];
