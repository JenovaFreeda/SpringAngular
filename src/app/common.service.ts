import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  apiCall(){
    return this.http.get('http://localhost:8086/api/get');
  }
  
  saveData(details:any){
    return this.http.post('http://localhost:8086/api/add', details);
  }
}
