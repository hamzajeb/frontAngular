import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { PanierService } from 'src/app/services/panier/panier.service';
import { ProduitsService } from './../../services/produits/produits.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
panierUser:any
imageDirectorypath ='http://127.0.0.1:8000/'
somme:any
  prixTot: any;
  user_id:any;

  constructor(private produitsService:ProduitsService,private panierService:PanierService,private commandeService:CommandeService,) {
    this.produitsService.p=0
    this.produitsService.q=0
   }

  ngOnInit(): void {
      this.getPanier();
      
     
  }

  getPanier(){
    this.panierService.getPanier(localStorage.getItem('id')).subscribe((panier: any) => {
    this.panierUser = panier.list_produitPanier;
     console.log(this.panierUser);
     this.prixTot = panier.prix_tot;
      
     
  
    
    
   });
  }


  deletePanier(id:any){
    console.log(id);
   this.panierService.deletePanier(id).subscribe((panier:any)=>{
     this.getPanier();
    this.produitsService.z()
   });
 }


 viderPanier(){
  
  this.panierService.viderPanier(localStorage.getItem('id')).subscribe((panier:any)=>{
    console.log(panier);
    
 });
}



 passerCommande(){
   var data = {'user_id':Number(localStorage.getItem('id'))};
    this.commandeService.passerCommande(data).subscribe((commande:any)=>{
      this.getPanier();
      console.log(commande);
    });

 }



}