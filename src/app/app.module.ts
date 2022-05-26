import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from './carousel/carousel.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table'  
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";
import {MatGridListModule} from '@angular/material/grid-list';
import { PhotosComponent } from './photos/photos.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { FooterComponent } from './layout/footer/footer.component'
import { RouterModule ,Routes, CanActivate} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TestComponent } from './test/test.component';
import { ProfilComponent } from './profil/profil.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { CategorieComponent } from './admin/categorie/categorie.component'
import { CardComponent } from './admin/card/card.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { BodyComponent } from './body/body.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { SousCategorieComponent } from './admin/sous-categorie/sous-categorie.component';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { DialogueAjouterPrComponent } from './admin/dialogue-ajouter-pr/dialogue-ajouter-pr.component';
import { DialogueModifierPrComponent } from './admin/dialogue-modifier-pr/dialogue-modifier-pr.component';
import { ArticleComponent } from './article/article.component';
import { FavorisComponent } from './favoris/favoris.component';
import { DetailsProduitComponent } from './details-produit/details-produit/details-produit.component';
import { PanierComponent } from './panier/panier/panier.component';
import { CommentaireComponent } from './admin/commentaire/commentaire/commentaire.component';
import { ChronoComponent } from './admin/chrono/chrono.component';

import { DialogueAjouterChronoComponent } from './admin/dialogue-ajouter-chrono/dialogue-ajouter-chrono.component';

import { MatDatepickerModule } from '@angular/material/datepicker';


import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {MatSliderModule} from '@angular/material/slider';
import { ArticleChronoComponent } from './article-chrono/article-chrono.component';
import { Dashboard1Component } from './admin/dashboard1/dashboard1.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { Dashboard2Component } from './admin/dashboard2/dashboard2.component';




const appRoutes:Routes=[
   //{path:'test',component:TestComponent,canActivate: [AuthGuard]},
  
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PhotosComponent,
    PubliciteComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DialogComponent,
    TestComponent,
    ProfilComponent,
    HomeAdminComponent,
    NavAdminComponent,
    CategorieComponent,
    BodyComponent,

    CardComponent,
    SousCategorieComponent,
    DialogueAjouterPrComponent,
    DialogueModifierPrComponent,
    ArticleComponent,
    FavorisComponent,
    DetailsProduitComponent,
    PanierComponent,
    CommentaireComponent,
    ChronoComponent,
    DialogueAjouterChronoComponent,
    ArticleChronoComponent,
    Dashboard1Component,
    Dashboard2Component,

   
  






  ],
  imports: [
    HighchartsChartModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatGridListModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    CarouselModule,
    RouterModule,
    MatDialogModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatPasswordStrengthModule.forRoot(),
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    MatDatepickerModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatSliderModule




  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
