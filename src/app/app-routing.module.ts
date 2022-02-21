import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { FirstComponent } from './pages/appointments/appointment.component';
import { IndexComponent } from './pages/index/index.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'register', component:RegisterComponent},
  {path:'set-password/:id', component:SetPasswordComponent},
  {path:'appointments', component:FirstComponent},
  {path:'luxurykitchen', loadChildren: () => import('./pages/kitchen/kitchen.module').then(m => m.KitchenModule)},
  {path:'estimates', loadChildren: () => import('./pages/estimates/estimates.module').then(m => m.EstimatesModule)},
  {path:'projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)},
  {path:':section', component:IndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
