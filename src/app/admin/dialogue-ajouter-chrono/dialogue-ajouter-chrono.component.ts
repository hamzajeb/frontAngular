import { Component, OnInit,ViewChild, ElementRef , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ProduitsService} from './../../services/produits/produits.service'
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Promo } from './../../models/promo.model';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms' 
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dialogue-ajouter-chrono',
  templateUrl: './dialogue-ajouter-chrono.component.html',
  styleUrls: ['./dialogue-ajouter-chrono.component.css'],


})
export class DialogueAjouterChronoComponent implements OnInit {
  ajout:any
  promo=new Promo();
 
  constructor(private router: Router,private toastr:ToastrService,@Inject(MAT_DIALOG_DATA) public data1: any,private produitsService:ProduitsService) {
    console.log(this.data1.produit.id)
   }

  ngOnInit(): void {
    this.ajout=new FormGroup({
      date_chrono:new FormControl(''),
      pourcentage:new FormControl(''),
      })
  }

  // x(){
  //   console.log(this.num)
  //   console.log(this.name)
  //   var futureDate:any = new Date(this.name).getTime();//date que vous voulez (fin de promo), getTime() en ms,Thu Apr 07 2022 19:00:00 GMT+0200
  //   var today:any = new Date().getTime(); //date a ce moment, Thu Apr 07 2022 17:50:06 GMT+0200
  //   var distance = futureDate-today;//distance en ms
  //   console.log(distance)
  // }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    
    return value;
  }

  ajouterPromo(){
    this.promo.is_promo=1;
    this.promo.nouveauPrix=this.data1.produit.prix-this.data1.produit.prix*(this.promo.pourcentage/100)
     this.produitsService.ajouterPromo(this.data1.produit.id,this.promo).subscribe((res:any)=>{
      console.log(res);
      // this.router.navigate(['chrono']);
      this.toastr.success(JSON.stringify(res.message),'',{
        timeOut:4000,
        progressBar:true
      })
    })
  }

}
