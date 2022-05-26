import { Component, Input, OnInit } from '@angular/core';


interface lesImages{
  imageSrc: string;
  imageAlt:string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() imagess:lesImages[]=[];
  @Input() indicators=true;
  @Input() controls=true;
  @Input() autoSlide=false;
  @Input() slideInterval=10000;

  selectedIndex = 0;
  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlidIntervale();
    }
  }
  autoSlidIntervale():void{
    setInterval(()=>{
      this.onNextClick();
    },this.slideInterval);// a chaque 10000ms onNextClick() s'execute
  }

  selectImage(index : number):void{
    this.selectedIndex=index;
  }

  onPrevClick():void{
    if(this.selectedIndex === 0){
      this.selectedIndex=this.imagess.length-1;
    }else{
      this.selectedIndex--;
    }
  }

  onNextClick():void{
    if(this.selectedIndex === this.imagess.length-1){
      this.selectedIndex=0;
    }else{
      this.selectedIndex++;
    }

  }

}
