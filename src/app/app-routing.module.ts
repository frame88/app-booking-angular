import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hotelview3Component } from './features/hotelview3/hotelview3.component';

const routes: Routes = [
  { path:'search',loadChildren: () =>
  import('./features/search/search.module').then(m => m.SearchModule)},
  { path:'login', loadChildren:() => import('./features/login/login.module').then( m=> m.LoginModule) },
  { path:'cart', loadChildren:() => import('./features/cart/cart.module').then(m => m.CartModule)},
  { path:'secondpage', component: Hotelview3Component },
  // { path:'**', redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
