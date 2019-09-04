import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './Admin//admin-login/admin-login.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { AdminLandingComponent } from './Admin/admin-landing/admin-landing.component';
import { UserLandingComponent } from './User/user-landing/user-landing.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { UserNavComponent } from './User/user-nav/user-nav.component';
import { ImportDataComponent } from './Admin/import-data/import-data.component';
import { ManageCompanyComponent } from './Admin/manage-company/manage-company.component';
import { ManageExchangeComponent} from './Admin/manage-exchange/manage-exchange.component'; 
import { UpdateIPOComponent } from './Admin/update-ipo/update-ipo.component';
import { IPOsComponent } from './User/ipos/ipos.component';
import { CompareCompanyComponent } from './User/compare-company/compare-company.component';
import { CompareSectorsComponent } from './User/compare-sectors/compare-sectors.component';
import { CreateCompanyComponent } from './Admin/create-company/create-company.component';
import { RegisterNewStockComponent } from './Admin/register-new-stock/register-new-stock.component';
import { UserService } from 'src/app/User/user.service';
import { UpdateCompanyComponent } from './Admin/update-company/update-company.component';
import { UpdateStockComponent } from './Admin/update-stock/update-stock.component';
import { AdminService } from 'src/app/Admin/admin.service';
import { UpdateProfileComponent } from './User/update-profile/update-profile.component';
import { LineChartComponent } from './User/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminLandingComponent,
    UserLandingComponent,
    AdminNavComponent,
    UserNavComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    ManageExchangeComponent,
    UpdateIPOComponent,
    IPOsComponent,
    CompareCompanyComponent,
    CompareSectorsComponent,
    CreateCompanyComponent,
    RegisterNewStockComponent,
    UpdateCompanyComponent,
    UpdateStockComponent,
    UpdateProfileComponent,
    LineChartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'AdminLogin', component:  AdminLoginComponent},
      {path: 'UserLogin', component: UserLoginComponent},
      {path: 'Register', component: RegisterComponent},
      
      {path: 'AdminLanding', component: AdminLandingComponent},
      {path: 'UserLanding', component: UserLandingComponent},
      {path: 'ImportData', component:ImportDataComponent},
      {path: 'ManageCompany', component:ManageCompanyComponent},
      {path: 'CreateCompany', component:CreateCompanyComponent},
      {path: 'UpdateStock', component:UpdateStockComponent},
      {path: 'UpdateCompany', component:UpdateCompanyComponent},
      {path: 'ManageExchange', component:  ManageExchangeComponent},
      {path: 'RegisterNewStock', component:RegisterNewStockComponent},
      {path: 'UpdateIPO', component: UpdateIPOComponent},
      {path: 'IPOs', component:IPOsComponent},
      {path: 'CompareCompany', component:CompareCompanyComponent},
      {path: 'CompareSectors', component:CompareSectorsComponent},
      {path: 'UpdateProfile', component:UpdateProfileComponent},
       ]),
  ],
  providers: [AuthService,UserService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
