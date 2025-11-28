import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Career } from './components/career/career';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { UserList } from './components/user-list/user-list';
import { UserDetails } from './components/user-details/user-details';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'about',component:AboutUs},
    {path:'career',component:Career},
    {path:'contactUs',component:ContactUs},
    { path: 'users', component: UserList },
    { path: 'user-details/:id', component: UserDetails },
    {path:'',component:Home},
    {path:'**',component:NotFound},
    
];
