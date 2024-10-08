import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
{path : 'signin' , component: SigninComponent },
{path : 'signup' , component : SignupComponent},
{path: '' , redirectTo : 'signin' , pathMatch: 'full'},
{path:'home' , component:HomeComponent , title:'Home'}
];
