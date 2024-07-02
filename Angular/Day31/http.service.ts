import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

      loginUser(obj:any){
         return (this.http.post(`${this.baseUrl}login`,obj));
      }

      getAllRecord(){
        return (this.http.get(`${this.baseUrl}getAllEmp`));
      }

      getRecordById(id:any){
       return (this.http.get(`${this.baseUrl}getbyId/${id}`));
      }

      getAllCountry(){
        return (this.http.get(`${this.baseUrl}getAllCountry`));
      }

      saveRecord(obj:any){
       return (this.http.post(`${this.baseUrl}addEmp`,obj,{
          responseType:'text'
        }));
      }

}
