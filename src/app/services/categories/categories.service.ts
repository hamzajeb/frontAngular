import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategorieModule } from 'src/app/models/categorie/categorie.module';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) {
    this.categories();
   
  }


  categories() {
    return this.http.get(this.baseUrl + "categorie");

  }
  getSouscategories() {
    return this.http.get(this.baseUrl + "getIndex");
  }

  insertCategorie(categorie:CategorieModule): Observable<CategorieModule>{
    return this.http.post<CategorieModule>(this.baseUrl + "categorie/",categorie);
  }

  deleteCategorie(id:any){
    return this.http.delete(this.baseUrl +"categorie/"+id);
  }

  updateCategorie(categorie:CategorieModule): Observable<CategorieModule>{
    return this.http.put<CategorieModule>(this.baseUrl +"categorie/"+categorie.id,categorie);
  }

  dashCategorie(){
    return this.http.get(this.baseUrl +"dashboardCat");
  }

  dashCategorie2(){
    return this.http.get(this.baseUrl +"dashboardCat2");
  }

  dashFavorite(){
    return this.http.get(this.baseUrl +"dashboardfav");
  }


  dashplusV(){
    return this.http.get(this.baseUrl +"maxProduit");
  }

  dashplusM(){
    return this.http.get(this.baseUrl +"minProduit");
  }

}
