import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';



import { FormControl } from '@angular/forms';

import { ProduitsService } from 'src/app/services/produits/produits.service';
import { PanierService } from 'src/app/services/panier/panier.service';
import { CommentairesService } from 'src/app/services/commentaires/commentaires.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
produit:any
load=false
  commentaires: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private produitsService:ProduitsService,private commantairesService:CommentairesService
  ,private panierService:PanierService,private router:Router, public dialogRef: MatDialogRef<DetailsProduitComponent>,private commentaireService:CommentairesService) {
    this.produitsService.m=0
    this.produitsService.p=0
    this.produitsService.q=0
   }
image:any
imageDirectorypath ='http://127.0.0.1:8000/'
info:any
commentaire = new FormControl('');
taille = new FormControl('');
quantite = new FormControl('');
   ngOnInit():  void {

  this.produitsService.getOneProduit(this.data.id_prod).subscribe((produit: any) => {
    this.produit = produit;
    console.log("produit"+this.produit);
    this.image = this.imageDirectorypath+produit.image1;
    this.load = true  
    
   });

   this.commentaireProduit();

  }

  commentaireProduit(){
    this.commantairesService.commentairesProduit(this.data.id_prod).subscribe((commentaires: any) => {
      this.commentaires = commentaires;
      console.log(commentaires);
      
     });
  }

  one(){
    this.produitsService.getOneProduit(this.data.id_prod).subscribe((produit: any) => {
      this.produit = produit;
      this.image = this.imageDirectorypath+produit.image1;

  });
}

  two(){
    this.produitsService.getOneProduit(this.data.id_prod).subscribe((produit: any) => {
      this.produit = produit;
      this.image = this.imageDirectorypath+produit.image2;

  });

  }

  three(){
    this.produitsService.getOneProduit(this.data.id_prod).subscribe((produit: any) => {
      this.produit = produit;
      this.image = this.imageDirectorypath+produit.image3;

  });

  }

  insertComment(produit_id:any){
    var data = {'produit_id': produit_id,'user_id':Number(localStorage.getItem('id')),'contenu':this.commentaire.value}
    this.commantairesService.insertComment(data).subscribe((commentaire: any) => {
    this.commentaire = new FormControl('');
    
     console.log(commentaire);
     this.commentaireProduit();
    });
  }

  ajouterAuPanier(produit_id:any){
    var data = {'produit_id': produit_id,'user_id':Number(localStorage.getItem('id')),'taille':this.taille.value,'quantite':this.quantite.value}
    this.panierService.ajouterPanier(data).subscribe((panier: any) => {
      console.log(panier);
     
    this.quantite = new FormControl('1');
    this.taille = new FormControl('');
    this.dialogRef.close();
    this.router.navigateByUrl("panier");
    
    
   
    });
  }


    
  }



 

 



  

 


