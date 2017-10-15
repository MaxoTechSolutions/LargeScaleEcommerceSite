import { LogindashComponent } from './components/login/logindash.component';
import { LoginComponent } from './components/login/login.component';
import { GuestComponent } from './components/login/guest.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    
    children:[ 
         {
      path:'',
      component:LogindashComponent
     },

          {
              path:'signUp',
              component:GuestComponent,
          },
        ]
        },
    
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }