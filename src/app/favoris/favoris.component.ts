import { Service1Service } from 'src/app/service1.service';
import { Component, OnInit } from '@angular/core';

import { ProduitsService } from './../services/produits/produits.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TestComponent} from './../test/test.component';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { DetailsProduitComponent } from '../details-produit/details-produit/details-produit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  id:any
  listePro:any []=[]
  listeFavUser : any[] = []
  listeFavUserPr : any[] = []
  i:any
  j:any
  imageDirectorypath:any='http://127.0.0.1:8000/'
  constructor(private service1Service:Service1Service,private produitsService:ProduitsService,public dialog: MatDialog ) { 
    this.produitsService.p=0
    this.produitsService.q=0
    this.produitsService.m=0
  }

  ngOnInit(): void {
    this.getFavUser()
  }
  getFavUser(){
    
    this.id=this.service1Service.getId()
    this.produitsService.getFavoritesUser(this.id).subscribe((user: any) => {
      this.listeFavUser= user.fav;
      console.log(this.listeFavUser);

        this.produitsService.listeProduit().subscribe((pr: any) => {
          this.listePro= pr;
          console.log(this.listePro);
          console.log("tool"+this.listeFavUser.length);
          this.listeFavUserPr=[]
          for(let i=0;i<this.listeFavUser.length;i++){
            for(let j=0;j<this.listePro.length;j++){
              if(this.listeFavUser[i].produit_id==this.listePro[j].id){
                this.listeFavUserPr[i]=this.listePro[j]
                
              }
            }
        
            }
            console.log(this.listeFavUserPr);
        });
  });

    

  }
  supprimerFav(pr:any){
    this.produitsService.supprimerFavoris(pr.id,this.service1Service.getId()).subscribe(res=>{
      console.log(res);
      this.getFavUser();
     });
     
     this.produitsService.x(0)
    //  pr.chrono_h='none'
    
  }



  getId(produit:any){
   
  
    this.id = produit.id;
    console.log(this.id);
   
    const dialogRef = this.dialog.open( DetailsProduitComponent,{data:{id_prod:this.id}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${this.id}`);
    });
   }
}
