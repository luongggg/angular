import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from '../layout/layout/layout.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
// import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  
 
  {path:'', component: LayoutComponent, children:[
    { path: '', component: HomeComponent },
    {path:'chi-tiet/:id', component: ProductDetailComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'account', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  {path:'cart',component: CartComponent},
  { path: 'search', component:SearchComponent},
  { path: "changepass",component:ChangePasswordComponent},
  ]},
  

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserAppRoutingModule {}
