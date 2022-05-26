import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SousCategorieModule } from 'src/app/models/sous-categorie/sous-categorie.module';

@Injectable({
  providedIn: 'root'
})
export class SousCategoriesService {
  

  baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) {
    this.sousCategories();
   
  }


  sousCategories() {
    return this.http.get(this.baseUrl + "sousCategorie");

  }

  SousCategorieProduit(id:any){
    return this.http.get('http://127.0.0.1:8000/api/catProduits/'+id)
  }


  

  insertSousCategorie(souscategorie: SousCategorieModule): Observable<SousCategorieModule>{
    return this.http.post<SousCategorieModule>(this.baseUrl + "sousCategorie/",souscategorie);
  }

  deleteSousCategorie(id:any){
    return this.http.delete(this.baseUrl +"sousCategorie/"+id);
  }

  updateSousCategorie(souscategorie:SousCategorieModule): Observable<SousCategorieModule>{
    return this.http.put<SousCategorieModule>(this.baseUrl +"sousCategorie/"+souscategorie.id,souscategorie);
  }

  categories() {
    return this.http.get(this.baseUrl + "categorie");

  }
}