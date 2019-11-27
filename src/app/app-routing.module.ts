import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { ViewpostsComponent } from './viewposts/viewposts.component';
import { UsersAppliedComponent } from './users-applied/users-applied.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent

  },
  { path: 'register', component: RegisterComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'addposts', component: AddpostsComponent },
  { path: 'viewposts', component: ViewpostsComponent },
  { path: 'usersApplied', component: UsersAppliedComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'userHome', component: UserHomeComponent },
  { path: 'adminPayment', component: AdminPaymentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
