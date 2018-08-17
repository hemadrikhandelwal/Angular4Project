import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 items=["Books","Apple","Vegetables"];
 newitem="";
 pushitem= function(){
 	if(this.newitem!=""){
 		this.items.push(this.newitem);
 		this.newitem=""; 
 	}
 }
 removeitem=function(index){
 	this.items.splice(index,1);
 }
}
