import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'cart', component:CartComponent},
  { path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
