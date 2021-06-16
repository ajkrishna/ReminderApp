import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoweventsComponent } from './showevents/showevents.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'showevents',component: ShoweventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
