import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Directive({
  selector: '[appImagload]'
})
export class ImagloadDirective implements OnInit {

  // public url = "assets/flower1.jpg"
  @Input() datas: string;
  constructor(private http: HttpClient, private el: ElementRef) {

  }

  ngOnInit() {
    console.log("welcome 2", this.datas);
    console.log("welcome 2", this.datas);
    this.http.get(this.datas, { responseType: 'blob' }).subscribe(data => {
      console.log("this is  base", this.datas);
      console.log("IMAGE DATA", data);
      //  let im=this.el.nativeElement;
      //  console.log("this done"); 
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        let im = this.el.nativeElement;
        console.log("this done");
        im.src = reader.result;
        console.log(reader.result);
      }, false);

      if (data) {
        console.log("this is data" + data);
        reader.readAsDataURL(data);
      }

    }, (error: any) => {
      console.log("ERROR", error);
    });


  } 
 



}
