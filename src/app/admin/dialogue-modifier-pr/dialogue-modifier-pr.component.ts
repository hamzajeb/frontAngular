import { Produit } from './../../models/produit.model';
import { ProduitsService } from './../../services/produits/produits.service';
import { Component, OnInit,ViewChild, ElementRef , Inject } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { FormControl, Validators,FormBuilder,FormGroup } from '@angular/forms';
import { SousCategorieModule } from 'src/app/models/sous-categorie/sous-categorie.module';
import { SousCategoriesService } from 'src/app/services/sousCategories/sous-categories.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialogue-modifier-pr',
  templateUrl: './dialogue-modifier-pr.component.html',
  styleUrls: ['./dialogue-modifier-pr.component.css']
})
export class DialogueModifierPrComponent implements OnInit {
  data:any
  listeCategories: any[] = []
  Souscategorie = new SousCategorieModule();
  produit = new Produit()
  listeSousCategories1: any;
  listeSousCategories2: any[] = []
  yy:any
  jj:any
  form!:FormGroup

  nomA:any;
  image1A:any;
  image2A:any;
  image3A:any;
  detailA:any;
  quantiteA:any;
  prixA:any;
  descriptionA:any;
  sous_categorie_idA:any;

  public categorie = new FormControl('')
  constructor( 
    @Inject(MAT_DIALOG_DATA) public data1: any,private router: Router,private produitsService:ProduitsService,private formBuilder:FormBuilder,private categoriesService:CategoriesService,private sousCategoriesService: SousCategoriesService,private toastr:ToastrService) {
    this.jj=0
    this.form=this.formBuilder.group({
      nom:[data1.produit.nom],
      image1:[data1.produit.image1],
      image2:[null],
      image3:[null],
      detail:[data1.produit.detail],
      quantite:[data1.produit.quantite],
      prix:[data1.produit.prix],
      description:[data1.produit.description],
      sous_categorie_id:[data1.produit.sous_categorie_id],
      })
      console.log(data1.produit)
      this.fileAttr1=data1.produit.image1.substr(16, data1.produit.image1.length-1);
      this.fileAttr2=data1.produit.image2.substr(16, data1.produit.image2.length-1);
      this.fileAttr3=data1.produit.image3.substr(16, data1.produit.image3.length-1);
   }

  //  @ViewChild('selected') selectInputElement!: ElementRef<HTMLSelectElement>;


  ngOnInit(): void {
    this.Affichercategories();
    // console.log(data.id)
  }
  @ViewChild('fileInput4') fileInput1!: ElementRef;
  @ViewChild('fileInput5') fileInput2!: ElementRef;
  @ViewChild('fileInput6') fileInput3!: ElementRef;
  fileAttr1 = "Path d'image 1"
  fileAttr2 = "Path d'image 2"
  fileAttr3 = "Path d'image 3"
  uploadFileEvt1(imgFile: any) {
    this.file1=imgFile.target.files[0]
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr1 = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr1 += file.name;
      });
      this.produit.image1=this.fileAttr1;
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      this.fileInput1.nativeElement.value = '';
    } else {
      this.fileAttr1 = 'Choose File';
    }
  }
  uploadFileEvt2(imgFile: any) {
    this.file2=imgFile.target.files[0]
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr2 = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr2 += file.name;
      });
      this.produit.image2=this.fileAttr2;
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      this.fileInput2.nativeElement.value = '';
    } else {
      this.fileAttr2 = 'Choose File';
    }
  }
  uploadFileEvt3(imgFile: any) {
    this.file3=imgFile.target.files[0]
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr3 = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr3 += file.name ;
      });
      this.produit.image3=this.fileAttr3;
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      this.fileInput3.nativeElement.value = '';
    } else {
      this.fileAttr3 = 'Choose File';
    }
  }

  Affichercategories() {
    this.categoriesService.categories().subscribe((categories: any) => {
      this.listeCategories = categories;
      console.log(this.listeCategories)
   });
  }
  public onChange(event:any){  
    this.jj=1
    // this.selectInputElement.nativeElement.disabled=true;
    this.listeSousCategories2.splice(0,this.listeSousCategories2.length);
    console.log(event);
    this.sousCategoriesService.sousCategories().subscribe((souscategories: any) => {
      this.listeSousCategories1 = souscategories;
      console.log(this.listeSousCategories1)
      for(let Souscategorie1 of this.listeSousCategories1){
        if(Souscategorie1.categorie_id==event){
        this.listeSousCategories2.push (Souscategorie1);
        console.log(this.listeSousCategories2)
        }
      }
   });


}
file1:any;
file2:any;
file3:any;


insertProduit(){
  var formData:any=new FormData();
  formData.append("nom",this.form.value.nom);
  formData.append("image1",this.file1,this.file1.name);
  formData.append("image2",this.file2,this.file2.name);
  formData.append("image3",this.file3,this.file3.name);
  formData.append("detail",this.form.value.detail);
  formData.append("quantite",this.form.value.quantite);
  formData.append("prix",this.form.value.prix);
  formData.append("description",this.form.value.description);
  formData.append("sous_categorie_id",this.form.value.sous_categorie_id);
   this.produitsService.updateProduit(this.data1.produit.id,formData).subscribe(res=>{
    console.log(res);
    this.data=res;
    this.router.navigate(['card']);
    this.toastr.success(JSON.stringify(this.data.message),'',{
      timeOut:4000,
      progressBar:true
    })
   });
   
}

}
