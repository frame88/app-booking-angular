import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'search',loadChildren: () =>
  import('./features/search/search.module').then(m => m.SearchModule)},
  { path:'login', loadChildren:() => import('./features/login/login.module').then( m=> m.LoginModule) },
  { path:'cart', loadChildren:() => import('./features/cart/cart.module').then(m => m.CartModule)},
  { path:'hotel/:id', loadChildren:() => import('./features/hotelview/hotelview.module').then(m => m.HotelviewModule)},
  // { path:'**', redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
