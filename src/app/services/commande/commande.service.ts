import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) {  
    
  }

  passerCommande(user_id:any){
    console.log(user_id);
    return this.http.post(this.baseUrl + "ajouterCommande",user_id);
  }
}
