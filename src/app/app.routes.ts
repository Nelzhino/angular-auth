import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrecioComponent } from './precio/precio.component';
import { HomeComponent } from './home/home.component';
import { ProtegidaComponent } from './protegida/protegida.component';
import { AuthGuardService } from './services/auth-guard.service';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precio', component: PrecioComponent },
    { path: 'protegida', component: ProtegidaComponent, canActivate: [AuthGuardService] },
    { path: '**',  redirectTo: 'home', pathMatch: 'full' },
];

export const APP_ROUTING = RouterModule.forRoot(routes);
