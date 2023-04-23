import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-adv',
  templateUrl: './top-adv.component.html',
  styleUrls: ['./top-adv.component.scss']
})
export class TopAdvComponent implements  OnInit {

  cardDataArray: any;
  cardData: any;
  count: number;
  constructor() {
    this.count = 0;
    this.cardDataArray = [
      {
        "tittle": "Adv 1",
        "desc": "Description",
        "image": "https://source.unsplash.com/800x600/?nature"
      },
      {
        "tittle": "Adv 2",
        "desc": "Description",
        "image": "https://source.unsplash.com/800x600/?car"
      },
      {
        "tittle": "Adv 3",
        "desc": "Description",
        "image": "https://source.unsplash.com/800x600/?moto"
      },      {
        "tittle": "Adv 4",
        "desc": "Description",
        "image": "https://source.unsplash.com/800x600/?fantasy"
      }
    ]
  }


  ngOnInit(): void {
    this.cardData = this.cardDataArray[this.count];
  }

  onPrevious(): void {
    this.count = this.count - 1;
    if(this.count < 0){
      this.count = this.cardDataArray.length;
      this.cardData = this.cardDataArray[this.count];
    }
    else{
      this.cardData = this.cardDataArray[this.count];
    }
  }

  onNext(): void {
    this.count = this.count + 1;
    console.log(this.count);
    
    if(this.count > this.cardDataArray.length){
      this.count = 0;
      this.cardData = this.cardDataArray[this.count];
    }
    else{
      this.cardData = this.cardDataArray[this.count];
    }
  }

}
