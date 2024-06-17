import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  myid:number=9;
  myusername:string='Sumit Raokhande';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  constructor(private router:Router) {
    
  }

  onPage1(){
    this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.router.navigate(['/Page2',this.myid]);
  }
  onPage3(){
    this.router.navigate(['/Page3',this.myid,this.myusername])
  }
  onFollower(){
    this.router.navigate(['/Follower']);
  }
  onQueryParameter(){
    this.router.navigate(['/queryparameter'],{
      queryParams:this.jsonObj
    })
  }

}
