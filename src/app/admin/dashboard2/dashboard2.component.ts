import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import{CategoriesService}from './../../services/categories/categories.service'

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  Highcharts :any;

  chartOptions= {};

  data:any []=[]

  constructor(private categoriesService:CategoriesService) {
        // this.Affichercategories()
   }
  // Affichercategories() {
  //   this.categoriesService.dashCategorie().subscribe((categories: any) => {
  //     this.data = categories;
  //     console.log(this.data)
  //   });
//  }

  ngOnInit(): void { 
   
  this.categoriesService.dashCategorie2().subscribe((categories: any) => {
    this.data = categories;
    console.log(this.data)
    this.Highcharts = Highcharts;
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: '<h1 style="font-size: 18px;text-align: center;font-weight:bold">Pourcentage des catégories selon la quantite des produits dans le stock, 2022</h1>'
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
    

  
}
}
