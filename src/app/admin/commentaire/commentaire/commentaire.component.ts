import { Component, OnInit } from '@angular/core';
import { CommentairesService } from 'src/app/services/commentaires/commentaires.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
 
  commentaires: any;
  imageDirectorypath ='http://127.0.0.1:8000/';
  constructor(private commentaireService:CommentairesService) { }

  ngOnInit(): void {
    this.getAllCommentaires();
  }


  getAllCommentaires(){
    this.commentaireService.getAllComment().subscribe((commentaires: any) => {
      this.commentaires = commentaires;
      console.log(commentaires);
  });
}

deleteCommentaire(id:any){
  console.log(id);
 this.commentaireService.deleteComment(id).subscribe((commentaire:any)=>{
   this.getAllCommentaires();
  
 })
}
}
