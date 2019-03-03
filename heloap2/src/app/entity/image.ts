// export class Image {

//     public imagePath: String;
//     public imageEncoded: String;

 
//  public url="assets/flower1.jpg"
//     constructor(http: HttpClient,  el: ElementRef) {
//         console.log("welcome 2", this.datas);
//         this.http.get(this.url, { responseType: 'blob' }).subscribe(data => {
//           console.log("this is  base", this.url);
//           console.log("IMAGE DATA", data);
//           //  let im=this.el.nativeElement;
//           //  console.log("this done"); 
    
    
//           let reader = new FileReader();
    
//           reader.addEventListener("load", () => {
//             let im = this.el.nativeElement;
//             console.log("this done");
//             im.src = reader.result;
//             console.log(reader.result);
//           }, false);
    
//           if (data) {
//             console.log("this is data" + data);
//             reader.readAsDataURL(data);
//           }
    
//         }, (error: any) => {
//           console.log("ERROR", error);
//         });
//     }
// }