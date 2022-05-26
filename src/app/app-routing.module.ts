import { DialogComponent } from './dialog/dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { PhotosComponent } from './photos/photos.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { TestComponent } from './test/test.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { CategorieComponent } from './admin/categorie/categorie.component';

import { FavorisComponent } from './favoris/favoris.component';
import { ChronoComponent } from './admin/chrono/chrono.component';

import { SousCategorieComponent } from './admin/sous-categorie/sous-categorie.component';
import { CardComponent } from './admin/card/card.component';
import { AuthGuard } from './auth.guard';
import { PanierComponent } from './panier/panier/panier.component';
import { DetailsProduitComponent } from './details-produit/details-produit/details-produit.component';
import { CommentaireComponent } from './admin/commentaire/commentaire/commentaire.component';
import { ArticleChronoComponent } from './article-chrono/article-chrono.component';
import { Dashboard1Component } from './admin/dashboard1/dashboard1.component';
const routes: Routes = [
  {path:"",component:PhotosComponent},
  {path:"homeAdmin",component:HomeAdminComponent, canActivate:[AuthGuard]},
  


  
 
  {path:"login",component:LoginComponent,
  children:[{path:"register",component:DialogComponent}]
  ,

},
  {path:"dialog",component:DialogComponent},
  {path:"profil",component:ProfilComponent},
  {path:"categorie",component:CategorieComponent},
  {path:"test",component:TestComponent},
 
  
  // {path:"dashboard", component:DashboardComponent ,canActivate:[AuthGuard]},
  {path:"dashboard1", component:Dashboard1Component },

  {path:"Souscategorie", component:SousCategorieComponent},
  {path:"Commentaire",component:CommentaireComponent},
  {path:"card", component:CardComponent},
  {path:"articleComponent/:id",component:ArticleComponent},
  {path:"favoris",component:FavorisComponent},
  {path:"articleComponent/:id_cat/:id",component:DetailsProduitComponent},
  {path:"panier",component:PanierComponent},
  {path:"chrono",component:ChronoComponent},
  {path:"articlechrono",component:ArticleChronoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
