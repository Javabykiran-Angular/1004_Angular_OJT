import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  course:string[]=["Core java","Advanced Java",'Spring Boot','Hibernate','MySql','HTML','CSS','JS','Angular','Docker','AWS','Jenkings'];


  arrProduct=[
    {
      name:"OnePlus",
      price:45000,
      qty:1
    },
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"RealMe",
      price:18000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:1
    }
  ]
selected:string='';

  onMouseOver(item:any){
    console.log("Mouse Over Event Occur..");
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("-----------Mouse Out event occur-------");
    this.selected='';
  }


}
