import { Component, NgModule, createComponent } from '@angular/core';
// import { Module, Routes } from '@angular/core';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCartComponendComponent } from './cart/dashboard-cart-componend/dashboard-cart-componend.component';
import { DashboarduserComponent } from './user/dashboarduser/dashboarduser.component';
import { CommentComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact/contact.component';


// import { AboutComponent } from './pages/about/about.component';



const routes: Routes = [

  
  {
    path: 'admin',component:LayoutAdminComponent, children: [

      {
        path:'',component:DashboardComponent
      },
      {
        path:'admin/:id',component:UpdateComponent
      },
      {
        path:'create',component:CreateComponent
      },
      {
        path:'cart',component:DashboardCartComponendComponent
      }, {
        path:'user',component:DashboarduserComponent
      },
      {
        path:'comment',component:CommentComponent
      },
      {
        path:'contact',component: ContactComponent
      }
      
    ]


  },

 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule],
})
export class AdminAppRoutingModule {}
