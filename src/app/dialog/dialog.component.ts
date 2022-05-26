import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service1Service } from './../service1.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  m1:any;
  m2:any;
  r:any;
  constructor(private service1Service:Service1Service,private router: Router) {
    this.m1=this.service1Service.message1
    this.m2=this.service1Service.message2
    this.r=this.service1Service.route
   }

  ngOnInit(): void {
  }

  focus(){
    this.service1Service.focus2=1
  }


  

}
