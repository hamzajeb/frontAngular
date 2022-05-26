import { Component, OnInit,TemplateRef } from '@angular/core';
import { DialogueAjouterPrComponent } from './../dialogue-ajouter-pr/dialogue-ajouter-pr.component';
import { DialogueModifierPrComponent } from './../dialogue-modifier-pr/dialogue-modifier-pr.component';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProduitsService } from './../../services/produits/produits.service';
import {MatTableDataSource} from '@angular/material/table';
interface listeProduits {
  nom:string;
  quantite:number;
  prix:number;
  image1:File;
  detail:string;
  sous_categorie_id:any;
}

let ELEMENT_DATA: listeProduits[] = [
];
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'quantite', 'prix', 'image1','detail','sous_categorie','Action'];
  imageDirectorypath:any='http://127.0.0.1:8000/'
  dataSource:any
  data:any
  
  constructor(private toastr:ToastrService,public dialog: MatDialog,private produitsService:ProduitsService) {
    
   }


  AfficherProduits() {
    this.produitsService.listeProduit().subscribe((produits: any) => {
      ELEMENT_DATA = produits;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      console.log(ELEMENT_DATA)
      
   });
 }

  openDialog() {
    let dialogRef=this.dialog.open( DialogueAjouterPrComponent);
    dialogRef.afterClosed().subscribe(() => { this.AfficherProduits(); } );
 }
 ngOnInit(): void {
  this.AfficherProduits();

}



 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }

 deleteProduit(id:any){
  this.produitsService.deleteProduit(id).subscribe(res=>{
    console.log(res);
    this.data=res;
    this.AfficherProduits();
    // this.showSuccess("La suppression est réussite");
    this.toastr.success(JSON.stringify(this.data.message),'',{
      timeOut:2000,
      progressBar:true
    })
  })
}

updateProduit(produit:any){
  let dialogRef2=this.dialog.open( DialogueModifierPrComponent, {
    data: {produit: produit},
  });
  dialogRef2.afterClosed().subscribe(() => { this.AfficherProduits(); } );

}

}
