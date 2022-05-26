import { Component, OnInit ,TemplateRef} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CategorieModule } from 'src/app/models/categorie/categorie.module';
import { CategoriesService } from 'src/app/services/categories/categories.service';
export interface ListCat {
  id: number;
  nom: string;
  action :any;
}

let ELEMENT_DATA: ListCat[] = [
];


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})

export class CategorieComponent implements OnInit {
  public nom = new FormControl('',Validators.required)
  listeCategories: any[] = []
  categorie = new CategorieModule;
  modalRef?: BsModalRef;
  titre ="";
  titreModal ="";
  selectedCat = <CategorieModule>{};
  public showError = false;
  dataSource: any;
  displayedColumns: string[] = ['id','nom','Action'];

 
  constructor(private categoriesService: CategoriesService,private toastr:ToastrService,private modalService:BsModalService) {
    
   }

  ngOnInit(): void {
    this.Affichercategories();
    this.InsertCategorie();
  }

  Affichercategories() {
    this.categoriesService.categories().subscribe((categories: any) => {
      ELEMENT_DATA = categories;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      console.log(ELEMENT_DATA)
      
   });
 }

 

 InsertCategorie(){

  if(!this.nom.value){
    this.showError = true;
    return;
  }

  this.selectedCat.nom = this.nom.value;
 

  if(this.titre == 'Modifier'){
    this.categoriesService.updateCategorie(this.selectedCat)
      .subscribe((categorie:any)=>{
        this. Affichercategories();
        this.vider();
        this.showError = false;
        this.modalRef?.hide();
        this.showSuccess("La modification est réussite");
      });
  }else{
    this.categoriesService.insertCategorie(this.selectedCat)
      .subscribe((categorie:any)=>{
        this.Affichercategories();
        this.vider();
        this.showError = false;
        this.modalRef?.hide();
        this.showSuccess("L'insertion est réussite");
      });
  }


}

 

 deleteCategorie(id:any){
   console.log(id);
  this.categoriesService.deleteCategorie(id).subscribe((categorie:any)=>{
    this.Affichercategories();
    this.showSuccess("La suppression est réussite");
  })
}
  
showSuccess(text:any){
  this.toastr.success(text);
}

openModal(template: TemplateRef<any>,categorie?:CategorieModule) {
  if(categorie){
    this.titreModal ="Modifier Catégorie";
    this.titre ="Modifier";
    this.selectedCat = categorie;
    this.nom.setValue(categorie.nom);
    
  }
  else{
    this.titreModal="Ajouter Catégorie";
    this.titre ="Enregistrer";
    this.vider();
  }
    this.modalRef = this.modalService.show(template);
  }


  vider(){
    this.nom.reset();
  }





}
