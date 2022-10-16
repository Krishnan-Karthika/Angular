import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchresultComponent } from './branchresult/branchresult.component';
import { PincoderesultComponent } from './pincoderesult/pincoderesult.component';
import { SearchPageComponent } from './searchpage/search-page.component';
import { ViewbranchdetailsComponent } from './viewbranchdetails/viewbranchdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchPageComponent  },
  { path: 'pincode-details/:id', component: ViewdetailsComponent  },
  { path: 'search-by-branch/:branch', component: BranchresultComponent  },
  { path: 'search-by-pincode/:pincode', component: PincoderesultComponent  },
  { path: 'branch-details/:id', component: ViewbranchdetailsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
