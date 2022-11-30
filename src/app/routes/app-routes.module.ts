import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyApplicationsComponent } from '../views/application/my-applications/my-applications.component';
import { NewApplicationComponent } from '../views/application/new-application/new-application.component';
import { ViewApplicationComponent } from '../views/application/view-application/view-application.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { HomeComponent } from '../views/home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path:'search', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'application/new', component: NewApplicationComponent},
  {path: 'application/:application-uuid', component: ViewApplicationComponent},
  {path: 'application/myapplications', component: MyApplicationsComponent},
  {path: '**', redirectTo: '/home' }
  ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  exports: [
    RouterModule
    ],
})
export class AppRoutesModule { }
