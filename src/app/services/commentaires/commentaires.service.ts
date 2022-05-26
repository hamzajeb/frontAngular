import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  
  baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) {  
    this.getAllComment();
  }

  commentairesProduit($produit_id:any) {
    return this.http.get(this.baseUrl + "getCommentaire/"+$produit_id);
    
  }


  insertComment(commentaire:any): Observable<any>{
    console.log(commentaire)
    return this.http.post(this.baseUrl + "addCommentaire",commentaire);
    
  }


  getAllComment(){
    return this.http.get(this.baseUrl + "getAllCommentaire");
  }

  deleteComment($id:any){
    return this.http.delete(this.baseUrl + "deleteCommentaire/"+$id);
  }






}
