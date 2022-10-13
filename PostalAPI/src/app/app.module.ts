import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './searchpage/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PincodeService } from './pincode.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { PincoderesultComponent } from './pincoderesult/pincoderesult.component';
import { BranchresultComponent } from './branchresult/branchresult.component';
import { ViewbranchdetailsComponent } from './viewbranchdetails/viewbranchdetails.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ViewdetailsComponent,
    PincoderesultComponent,
    BranchresultComponent,
    ViewbranchdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [PincodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
