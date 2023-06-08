import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
// import { RegisterComponent } from './pages/register/register.component';
import { AdminAppRoutingModule } from './admin/admin-routing.module';
import { UserAppRoutingModule } from './pages/user-routing.module';
// import { AboutComponent } from './pages/about/about.component';
// import { SaleComponent } from './pages/sale/sale.component'; 
import { NewsComponent } from './pages/news/news.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import { ProductComponent } from './admin/product/product.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { CreateComponent } from './admin/create/create.component';
import { UpdateComponent } from './admin/update/update.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CreateCartComponentComponent } from './admin/cart/create-cart-component/create-cart-component.component';
import { DashboardCartComponendComponent } from './admin/cart/dashboard-cart-componend/dashboard-cart-componend.component';
import { UpdateCartComponentComponent } from './admin/cart/update-cart-component/update-cart-component.component';
import { NavComponent } from './admin/nav/nav.component';
import { DashboarduserComponent } from './admin/user/dashboarduser/dashboarduser.component';
import { CreateuserComponent } from './admin/user/createuser/createuser.component';
import { UpdateuserComponent } from './admin/user/updateuser/updateuser.component';
import { CommentComponent } from './admin/comments/comments.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
// import { ContactComponent } from './admin/contact/contact/contact.component';



@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    NotFoundComponent,
    LoginComponent,
    // RegisterComponent,

    // AboutComponent,
    NewsComponent,
    DashboardComponent,
    // ProductComponent,
    LayoutComponent,
    LayoutAdminComponent,
    CreateComponent,
    UpdateComponent,
    ContactComponent,
    SearchComponent,
    ProductDetailComponent,
    CartComponent,
    CreateCartComponentComponent,
    DashboardCartComponendComponent,
    UpdateCartComponentComponent,
    NavComponent,
    DashboarduserComponent,
    CreateuserComponent,
    UpdateuserComponent,
    CommentComponent,
    ContactComponent,
    ChangePasswordComponent

   
   
  ],
  imports: [
    HttpClientModule ,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AdminAppRoutingModule,
    UserAppRoutingModule,
    // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
