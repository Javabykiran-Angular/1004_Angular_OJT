import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getposts(){
    return (this.http.get(this.baseUrl));
  }

  SendData(obj:any){
    return (this.http.post(this.baseUrl,obj));
  }

}
