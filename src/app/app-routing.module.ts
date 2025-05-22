import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { AuthGuard } from './shared/components/guard/auth.guard';
import { UserRoleGuard } from './shared/components/guard/user-role.guard';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, UserRoleGuard],

    data: {
      userRole: ['buyer', 'admin', 'superAdmin'],
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard, UserRoleGuard],

    data: {
      userRole: ['buyer', 'admin', 'superAdmin'],
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard, UserRoleGuard],

    data: {
      userRole: ['admin', 'superAdmin'],
    },
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuard, UserRoleGuard],

    data: {
      userRole: ['buyer', 'admin', 'superAdmin'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
