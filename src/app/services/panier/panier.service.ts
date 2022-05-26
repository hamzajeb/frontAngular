import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierModule } from 'src/app/models/panier/panier.module';


@Injectable({
  providedIn: 'root'
})
export class PanierService {

  baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) {  
  }

ajouterPanier(panier:any){
  
  return this.http.post(this.baseUrl + "ajouterPanier",panier);
}

getPanier(user_id:any){

  return this.http.get(this.baseUrl +"getPanier/"+user_id);
}

deletePanier(id:any){
  return this.http.delete(this.baseUrl +"deletePanier/"+id);
}

viderPanier(user_id:any){
  return this.http.get(this.baseUrl +"viderPanier/"+user_id);
}

getCommandeUser(user_id:any){
  return this.http.get(this.baseUrl+"getCommandeUser/"+user_id);
}



  
}
