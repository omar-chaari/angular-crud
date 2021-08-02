import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'login' , component: LoginComponent },
  {path: 'signup' , component: SignupComponent },
  {path: 'contact' , component: ContactComponent },
  {path: 'admin' , component: AdminComponent },
  {path: 'display-match/:id' , component: DisplayMatchComponent },
  {path: 'display-user/:id' , component: DisplayUserComponent },
  {path: 'edit-contact/:id' , component: EditContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
