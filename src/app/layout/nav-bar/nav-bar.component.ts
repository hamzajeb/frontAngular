import { Component, OnInit } from '@angular/core';
import { Service1Service } from './../../service1.service';
import { ProduitsService } from './../../services/produits/produits.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TestComponent} from './../../test/test.component';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  nbrFavorite:any
  x2:any
  login:any;
  profile:any
  search: String = ""
  prenom:any;
  durationInSeconds = 5;
  listeCategories: any[] = []
  listeSousCategories: any[] = []
  valeur:any;
  panierUser:any;
  load = false;
  constructor(private produitsService:ProduitsService,private service1Service:Service1Service,private router: Router,private _snackBar: MatSnackBar,private categoriesService: CategoriesService,private panierService:PanierService) {
   }

  ngOnInit(): void {
    this.Affichercategories();
    this.AfficherSousCategories();
    // this._Activatedroute.queryParams.subscribe(queryParams => {
    //   // let id=this._Activatedroute.snapshot.paramMap.get("id");
    //   // this.id=id
    //   });
    //   this._Activatedroute.params.subscribe(routeParams => {
    //       let id=this._Activatedroute.snapshot.paramMap.get("id");
    //   this.id=id
    //   this.test=true
    //   this.afficherProduits(this.id)
    //   this.style1=true
    //   this.produits()
    //   });
    if(this.testconnexion()==true){
      this.getFavUser()
      }
      this.getnbrChrono()
    this.panierService.getPanier(localStorage.getItem('id')).subscribe((panier: any) => {
      this.panierUser = panier.list_produitPanier;
       console.log(this.panierUser);
       this.load=true
       this.valeur=Number(this.panierUser.length)
       console.log("nombre"+this.valeur)
    });
       
  }

  testconnexion(){
    // this.service1Service.profile().subscribe(response=>{
    //   console.log(response);
    // });
    // if(this.service1Service.profil != undefined){
    // this.nom=this.service1Service.profil.prenom;
    // }
    this.prenom=this.service1Service.getPrenom();
    this.login=this.service1Service.isLoggedin();
    this.profile=this.service1Service.getProfile();
    return this.login;//si connecter retourner true sinon false
  }

  Logout(){
    this.service1Service.logOut();
    this.router.navigate(['']);
    this._snackBar.openFromComponent(TestComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  AdminHome(){
    this.router.navigateByUrl('homeAdmin')
  }

     Affichercategories() {
     this.categoriesService.categories().subscribe((categories: any) => {
       this.listeCategories = categories;
    });
  }

  async AfficherSousCategories() {
    await this.categoriesService.getSouscategories().subscribe((Souscategories: any) => {
       this.listeSousCategories = Souscategories;
    });
  }
  gestion(){
    this.router.navigate(['dashboard1']);
  }
  admin(){
    if(this.profile==1){
    return true;
    }else{
      return false;
    }
  }


  id1:any
  listeFavUser : any[] = []
  getFavUser(){
    this.id1=this.service1Service.getId()
    this.produitsService.getFavoritesUser(this.id1).subscribe((user: any) => {
      this.listeFavUser= user.fav;
      this.nbrFavorite=this.listeFavUser.length;
      console.log("hhh"+this.nbrFavorite);
   });
   return this.nbrFavorite
  }
  x(){
    if(this.produitsService.p==0){
      // this.ss=this.lenghtPromo+this.produitsService.q
         return this.nbrFavorite
      }else{
        return this.nbrFavorite+this.produitsService.p
      }
  }
  r:any
  j(){
    this.produitsService.p=0
  }

  getPanier(){
    this.router.navigateByUrl("panier");
  }

  listeProduitsPromo:any []=[]
  lenghtPromo:any
  s:any
  Produits:any
  getnbrChrono(){
    this.produitsService.listeProduit().subscribe((res:any)=>{
      this.s=0
      this.Produits=res
      console.log(this.Produits)
      this.listeProduitsPromo=[]
      for(let i=0;i<this.Produits.length;i++){
        if(this.Produits[i].is_promo==1){
          this.listeProduitsPromo[this.s]=this.Produits[i]
          this.s=this.s+1
        }
      }
      this.lenghtPromo=this.listeProduitsPromo.length
      console.log( this.lenghtPromo)
    });
    return this.lenghtPromo
  }

  y(){
    if(this.produitsService.q==0){
    // this.ss=this.lenghtPromo+this.produitsService.q
       return this.lenghtPromo
    }else{
      return this.lenghtPromo+this.produitsService.q
    }
  }

  z(){
    if(this.produitsService.m==0){
    // this.ss=this.lenghtPromo+this.produitsService.q
       return this.valeur
    }else{
      return this.valeur+this.produitsService.m
    }
  }

}

