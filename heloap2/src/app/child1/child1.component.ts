import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  public values: any;
  constructor() { }

  public imageArray: any = [
    {
      Id: '1',
      imgPath: 'assets/flower.jpg',
      name: 'Navin',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id:'10',
      imgPath: 'assets/flower.jpg',
      name:'dews',
      surname:'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id: '1',
      imgPath: 'assets/flower.jpg',
      name: 'sahil',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id: '1',
      imgPath: 'assets/flower1.jpg',
      name: 'Navi',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id: '1',
      imgPath: 'assets/flower.jpg',
      name: 'sahil',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id: '1',
      imgPath: 'assets/flower1.jpg',
      name: 'Navi',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id: '1',
      imgPath: 'assets/flower3.jpg',
      name: 'Nikki',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },

    {
      Id: '1',
      imgPath: 'assets/flower1.jpg',
      name: 'sahil',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id: '1',
      imgPath: 'assets/flower3.jpg',
      name: 'rama',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id: '4',
      imgPath: "assets/flower.jpg",
      name: 'raj',
      surname: 'sharma',
      occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
    {
      Id: '1',
      imgPath: 'assets/flower1.jpg',
      name: 'naav',
      surname: 'sharma', occupation: 'develeoper',
      address: 'gurgaon',
      age: 32
    },
  ];
  public showvar: boolean;
  public text: any;

  //  outPutArray:Array<any>=[];

  public value: any;

  // getData(value:string){
  //   console.log(value+"start")
  //   // this.outPutArray.push(value);
  //  // console.log(value +"running process")
  //   console.log(this.outPutArray);
  //   //  console.log(this.childDataCome+"new dat")
  // }
  sendData(event) {
    console.log(event, "this event");
    this.value = event;
    console.log(this.value, "this value")
  }



}
