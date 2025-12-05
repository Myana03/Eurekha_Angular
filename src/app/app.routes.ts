import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Career } from './components/career/career';
import { ContactUs } from './components/contact-us/contact-us';
import { NotFound } from './components/not-found/not-found';
import { UserList } from './components/user-list/user-list';
import { UserDetails } from './components/user-details/user-details';
import { ContractJobs } from './components/contract-jobs/contract-jobs';
import { PermanentJobs } from './components/permanent-jobs/permanent-jobs';
import { ProductDetails } from './components/product-details/product-details';
// import { Products } from './components/products/products';
import { UploadVideos } from './components/upload-videos/upload-videos';
import { authGuard } from './guards/auth-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: AboutUs },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products').then((x) => x.Products), // Lazy
  },
  {
    path: 'career',
    component: Career,
    children: [
      { path: '', component: PermanentJobs },
      { path: 'permanent', component: PermanentJobs },
      { path: 'contract', component: ContractJobs },
    ],
  },
  {
    path: 'contactus',
    component: ContactUs,
    canDeactivate: [canExitGuard],
  },
  { path: 'career', component: Career },
  { path: 'contactUs', 
    component: ContactUs,
  canDeactivate: [canExitGuard],},
  { path: 'users', component: UserList },

  { path: 'user-details/:id', component: UserDetails },
  //{ path: 'products', component: Products },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products').then((x) => x.Products), // Lazy
  },
  { path: 'product-details', component: ProductDetails },
  {
    path: 'upload-videos',
    component: UploadVideos,
    canActivate: [authGuard],
  },
  { path: '', component: Home },
  { path: '**', component: NotFound },
];
