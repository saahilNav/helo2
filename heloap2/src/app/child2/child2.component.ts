import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
  @Input() user: any;

  constructor() { }
  value: any;
  @Output() myChilData = new EventEmitter<any>();
  sendChildData(evt) {
    console.log(evt);
    this.value = evt;
    //  this.childDataCome.push(obj);
    this.myChilData.emit(this.value);
  }


}
