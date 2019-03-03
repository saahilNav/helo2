import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  constructor(){}

  ngOnInit() {
  }
  @Input() user: any;
  @Input() showchild:boolean;
  @Output() myChilData = new EventEmitter<any>();

childDataCome:Array<any>=[];

sendChildData(value){
  console.log(value);
  this.myChilData.emit(value);
}
}
