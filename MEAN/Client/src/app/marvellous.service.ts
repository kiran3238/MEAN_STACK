import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';//different module from httpclient module
@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor( private http : HttpClient) {
    
   }
   getBatches(){
    return this.http.get("http://localhost:5555/getBatches");//service madhe call ahee
   }
}
