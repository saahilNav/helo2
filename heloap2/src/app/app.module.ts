import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagloadDirective } from './imagload.directive';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Child1Component } from './child1/child1.component';
import { ComponetAComponent } from './componet-a/componet-a.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations:[
    AppComponent,
    ImagloadDirective,
    ChildComponentComponent,
    Child1Component,
    ComponetAComponent,
    Child2Component,
    
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
