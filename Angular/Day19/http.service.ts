import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="https://jsonplaceholder.typicode.com/post";

  constructor(private http:HttpClient) { }

  getposts(){
    return (this.http.get(this.baseUrl));
  }

  SendData(obj:any){
    return (this.http.post(this.baseUrl,obj));
  }

  UpdateData(obj:any){
    return (this.http.put(`${this.baseUrl}/${obj.id}` ,obj));
  }

  deleteData(id:any){
     return (this.http.delete(`${this.baseUrl}/${id}`));
  }

}
