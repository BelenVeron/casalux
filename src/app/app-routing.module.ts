import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { FirstComponent } from './pages/appointments/first/first.component';
import { IndexComponent } from './pages/index/index.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'register', component:RegisterComponent},
  {path:'set-password/:id', component:SetPasswordComponent},
  {path:'set-password/:id/:email/:companyCode/:companyPosition/:specialty', component:SetPasswordComponent},
  {path:'appointments', component:FirstComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
