import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobListComponent } from './applied-job-list/applied-job-list.component';
import { ApplyJobPageComponent } from './apply-job-page/apply-job-page.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { JoblistpageComponent } from './joblistpage/joblistpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { VieprofileComponent } from './vieprofile/vieprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReviewComponent } from './review/review.component';
import { JobPostingComponent } from './job-posting/job-posting.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuardGuard]},
  { path:'login', component:SignuppageComponent},
  { path: 'jobs', component: JoblistpageComponent},
  { path: 'applyjobs', component: ApplyJobPageComponent},
  { path: 'appliedjobslist', component: AppliedJobListComponent},
  { path: 'viewprofile', component: VieprofileComponent},
  {path:'navbar',component: NavbarComponent},
  {path:'navigate',component:NavigatorComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'review',component:ReviewComponent},
  {path:'post-a-job',component:JobPostingComponent},

  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
