import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Service1Service } from 'src/app/service1.service';
import { TestComponent } from 'src/app/test/test.component';

import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
collapsed = false;
screenWidth = 0;
navData = navbarData;
durationInSeconds = 5;



  constructor(private service1Service:Service1Service,private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }

  closeSidenav(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
  }

  Logout(){

    this.router.navigate(['']);
  }

  


}


