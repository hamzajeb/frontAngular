import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import{CategoriesService}from './../../services/categories/categories.service'
import { Input } from '@angular/core';
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {
  Highcharts :any;
  Highcharts2 :any;
  x=0
  chartOptions= {};
  chartOptions2= {};
  data:any []=[]
  data2:any []=[]
  imageDirectorypath:any='http://127.0.0.1:8000/'
  constructor(private categoriesService:CategoriesService) {
        // this.Affichercategories()
   }
   Fav:any
  Favorites() {
    this.categoriesService.dashFavorite().subscribe((favorite: any) => {
      this.Fav = favorite;
      console.log(this.Fav)
    });
 }
 plusVendu:any
 plusVendu1() {
  this.categoriesService.dashplusV().subscribe((plusVendu: any) => {
    this.plusVendu = plusVendu;
    console.log(this.plusVendu)
  });
}
moinsVendu:any
moinsVendu1() {
  this.categoriesService.dashplusM().subscribe((moinsVendu: any) => {
    this.moinsVendu = moinsVendu;
    console.log(this.moinsVendu)
  });
}
 
  ngOnInit(): void { 
    this.plusVendu1()
    this.moinsVendu1()
    this.Favorites()
    this.categoriesService.dashCategorie().subscribe((categories: any) => {
      this.data = categories;
      console.log(this.data)
      this.Highcharts = Highcharts;
      this.x=1
      this.chartOptions={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '<h1 style="font-size: 18px;text-align: center;font-weight:bold">Pourcentage des catégories selon les sous-catégories dans le stock, 2022</h1>'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            },
            enabled:false,
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        exporting:{
          enabled:true,
        },
        credits:{
          enabled:false,
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
  
            data:  this.data,
            
        }]
    };
    });
      
    HC_exporting(Highcharts);
    
    






  
}

}
