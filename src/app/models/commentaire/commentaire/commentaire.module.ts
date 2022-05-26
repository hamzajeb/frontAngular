import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommentaireModule { 
  id:any;
  contenu:any;
  is_accept!:boolean;
  produit_id:any;
  user_id:any;
  created_at: any;
  updated_at: any;
  user_nom : any;
  user_prenom:any;
}
