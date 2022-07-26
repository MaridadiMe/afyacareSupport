import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientVisitsComponent } from '../views/patient-visits/patient-visits.component';


const appRoutes: Routes = [
  {path: '', component: PatientVisitsComponent},
  {path:'search', redirectTo: 'patient/visits', pathMatch: 'full'},
  {path: 'patient/visits', component: PatientVisitsComponent},
  { path: '**', redirectTo: '/patient/visits' }
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
