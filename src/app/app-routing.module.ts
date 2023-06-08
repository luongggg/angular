import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// // import { AboutComponent } from './pages/about/about.component';
// import { CategoryComponent } from './pages/category/category.component';
// import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './pages/login/login.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { RegisterComponent } from './pages/register/register.component';
// // import { SaleComponent } from './pages/sale/sale.component';
// // import { ServicesComponent } from './pages/services/services.component';
// import { NewsComponent } from './pages/news/news.component';
// import { LayoutComponent } from './layout/layout/layout.component';
// import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
// import { DashboardComponent } from './admin/dashboard/dashboard.component';
// // import { SaleComponent } from './pages/sale/sale.component';
// import { CreateComponent } from './admin/create/create.component';
// import { UpdateComponent } from './admin/update/update.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  
 
//   {path:'', component: LayoutComponent, children:[
//     { path: '', component: HomeComponent },
//     {path:'chi-tiet/:id', component: ProductDetailComponent},
//   { path: 'category', component: CategoryComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'news', component: NewsComponent },
//   ]},
//   {
//     path: 'admin',component:LayoutAdminComponent, children: [

//       {
//         path:'admin',component:DashboardComponent
//       },
//       {
//         path:'admin/:id',component:UpdateComponent
//       },
//       {
//         path:'admin/create',component:CreateComponent
//       },
//     ]


//   },

//   {
//     path: '**',
//     component: NotFoundComponent,
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
