import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string=environment.baseUrl;

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

      updateRecord(obj:any){
        return (this.http.put(`${this.baseUrl}updateEmp`,obj,{
          responseType:'text'
        }));
      }

      deleteRecord(id:any){
      return  (this.http.delete(`${this.baseUrl}deleteEmp/${id}`,{
          responseType:"text"
        }));
      }

      imageUpload(file:File){
        console.log(file);
        let formData=new FormData();
        formData.append('file',file,file.name)
        let headers = new HttpHeaders();
        headers.append('Content-Type','image');
        return (this.http.post(`${this.baseUrl}uploadImageFile`,formData,{headers:headers}));
      }

}
