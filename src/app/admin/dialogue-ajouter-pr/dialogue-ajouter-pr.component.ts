import { Produit } from './../../models/produit.model';
import { ProduitsService } from './../../services/produits/produits.service';
import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { FormControl, Validators,FormBuilder,FormGroup } from '@angular/forms';
import { SousCategorieModule } from 'src/app/models/sous-categorie/sous-categorie.module';
import { SousCategoriesService } from 'src/app/services/sousCategories/sous-categories.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialogue-ajouter-pr',
  templateUrl: './dialogue-ajouter-pr.component.html',
  styleUrls: ['./dialogue-ajouter-pr.component.css']
})
export class DialogueAjouterPrComponent implements OnInit {
  data:any
  listeCategories: any[] = []
  Souscategorie = new SousCategorieModule();
  produit = new Produit()
  listeSousCategories1: any;
  listeSousCategories2: any[] = []
  yy:any
  jj:any
  form!:FormGroup

  public categorie = new FormControl('')
  constructor(private router: Router,private produitsService:ProduitsService,private formBuilder:FormBuilder,private categoriesService:CategoriesService,private sousCategoriesService: SousCategoriesService,private toastr:ToastrService) {
    this.jj=0
    this.form=this.formBuilder.group({
      nom:[''],
      image1:[null],
      image2:[null],
      image3:[null],
      detail:[''],
      quantite:[''],
      prix:[''],
      description:[''],
      sous_categorie_id:[''],
      })
   }

  //  @ViewChild('selected') selectInputElement!: ElementRef<HTMLSelectElement>;


  ngOnInit(): void {
    this.Affichercategories();

  }
  @ViewChild('fileInput1') fileInput1!: ElementRef;
  @ViewChild('fileInput2') fileInput2!: ElementRef;
  @ViewChild('fileInput3') fileInput3!: ElementRef;
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
   this.produitsService.ajouterProduit(formData).subscribe(res=>{
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
