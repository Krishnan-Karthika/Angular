import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchresultComponent } from './branchresult/branchresult.component';
import { PincoderesultComponent } from './pincoderesult/pincoderesult.component';
import { SearchPageComponent } from './searchpage/search-page.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchPageComponent  },
  { path: 'view-details/:id', component: ViewdetailsComponent  },
  { path: 'search-by-branch', component: BranchresultComponent  },
  { path: 'search-by-pincode', component: PincoderesultComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
