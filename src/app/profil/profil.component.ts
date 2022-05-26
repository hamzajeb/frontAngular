import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier/panier.service';
import { Service1Service } from './../service1.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  nom:any;
  prenom:any;
  date:any;
  email:any;
  telephone:any;
  ville:any;
  profile:any;
  commandesUser :any; 
  i = 0
  constructor(private service1Service:Service1Service,private panierService:PanierService) {
    this.nom=this.service1Service.getNom()
    this.prenom=this.service1Service.getPrenom()
    this.date=this.service1Service.getDate().slice(0,10)
    this.email=this.service1Service.getEmail()
    this.telephone=this.service1Service.getTele()
    this.ville=this.service1Service.getVille()
    this.profile=this.service1Service.getProfile()
   }

   ngOnInit(): void {
    this.getCommande(this.service1Service.getId())
    this.i = this.i+1
    
  }

  getCommande(user_id:any){
    this.panierService.getCommandeUser(user_id).subscribe((res:any) => {
      this.commandesUser = res;
   });

  }
}
