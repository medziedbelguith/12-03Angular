import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilFormationComponent } from './siteFormation/accueil-formation/accueil-formation.component';
import { CategorieDetailsFormationComponent } from './siteFormation/categorie-details-formation/categorie-details-formation.component';
import { FormationDetailsFormationComponent } from './siteFormation/formation-details-formation/formation-details-formation.component';
import { FormateurDetailsFormationComponent } from './siteFormation/formateur-details-formation/formateur-details-formation.component';

//pages categories
import { IdaretAmelComponent } from './siteFormation/pages-categories/idaret-amel/idaret-amel.component';
import { PnlComponent } from './siteFormation/pages-categories/pnl/pnl.component';

const routes: Routes = [
  {path: '',redirectTo:'accueil',pathMatch:"full"},
  {path: 'accueil' , component: AccueilFormationComponent },

  {path: 'CategorieDetails' , component: CategorieDetailsFormationComponent },
  {path: 'FormationDetails' , component: FormationDetailsFormationComponent },
  {path: 'FormateurDetails' , component: FormateurDetailsFormationComponent },

  //pages categories
  {path: 'IdaretAmel' , component: IdaretAmelComponent },
  {path: 'Pnl' , component: PnlComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
