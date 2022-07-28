import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilFormationComponent } from './siteFormation/accueil-formation/accueil-formation.component';
import { LoginFormationComponent } from './siteFormation/compteFormation/login-formation/login-formation.component';
import { InscriptionFormationComponent } from './siteFormation/compteFormation/inscription-formation/inscription-formation.component';
import { ProfilEtudiantFormationComponent } from './siteFormation/compteFormation/profil-etudiant-formation/profil-etudiant-formation.component';
import { ProfilEnseignantFormationComponent } from './siteFormation/compteFormation/profil-enseignant-formation/profil-enseignant-formation.component';
import { NavbarSiteFormationComponent } from './navbarsFormation/navbar-site-formation/navbar-site-formation.component';
import { FooterFormationComponent } from './componentsFormation/footer-formation/footer-formation.component';
import { ListEnseignantsFormationComponent } from './adminFormation/list-enseignants-formation/list-enseignants-formation.component';
import { ListEtudiantsFormationComponent } from './adminFormation/list-etudiants-formation/list-etudiants-formation.component';
import { Slider1Component } from './siteFormation/accueil-formation/slider1/slider1.component';
import { Slider2Component } from './siteFormation/accueil-formation/slider2/slider2.component';
import { Galerie1Component } from './siteFormation/accueil-formation/galerie1/galerie1.component';
import { Galerie2Component } from './siteFormation/accueil-formation/galerie2/galerie2.component';
import { Galerie3Component } from './siteFormation/accueil-formation/galerie3/galerie3.component';
import { Galerie4Component } from './siteFormation/accueil-formation/galerie4/galerie4.component';
import { Galerie5Component } from './siteFormation/accueil-formation/galerie5/galerie5.component';
import { TopCategoriesComponent } from './siteFormation/accueil-formation/top-categories/top-categories.component';
import { CategorieDetailsFormationComponent } from './siteFormation/categorie-details-formation/categorie-details-formation.component';
import { FormationDetailsFormationComponent } from './siteFormation/formation-details-formation/formation-details-formation.component';
import { FormateurDetailsFormationComponent } from './siteFormation/formateur-details-formation/formateur-details-formation.component';
import { FomationsFormationComponent } from './componentsFormation/fomations-formation/fomations-formation.component';
import { FormationsVoisinComponent } from './componentsFormation/formations-voisin/formations-voisin.component';
import { IdaretAmelComponent } from './siteFormation/pages-categories/idaret-amel/idaret-amel.component';
import { PnlComponent } from './siteFormation/pages-categories/pnl/pnl.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilFormationComponent,
    LoginFormationComponent,
    InscriptionFormationComponent,
    ProfilEtudiantFormationComponent,
    ProfilEnseignantFormationComponent,
    NavbarSiteFormationComponent,
    FooterFormationComponent,
    ListEnseignantsFormationComponent,
    ListEtudiantsFormationComponent,
    Slider1Component,
    Slider2Component,
    Galerie1Component,
    Galerie2Component,
    Galerie3Component,
    Galerie4Component,
    Galerie5Component,
    TopCategoriesComponent,
    CategorieDetailsFormationComponent,
    FormationDetailsFormationComponent,
    FormateurDetailsFormationComponent,
    FomationsFormationComponent,
    FormationsVoisinComponent,
    IdaretAmelComponent,
    PnlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
