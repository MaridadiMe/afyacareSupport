import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from './views/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutesModule } from './routes/app-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { NotificationDialogComponent } from './views/dialogs/notification-dialog/notification-dialog.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { HomeComponent } from './views/home/home.component';
import { NewApplicationComponent } from './views/application/new-application/new-application.component';
import { ViewApplicationComponent } from './views/application/view-application/view-application.component';
import { MyApplicationsComponent } from './views/application/my-applications/my-applications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    NotificationDialogComponent,
    HomeComponent,
    NewApplicationComponent,
    ViewApplicationComponent,
    MyApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatSidenavModule,
    MatExpansionModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
