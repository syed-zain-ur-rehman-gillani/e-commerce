import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='https://new-app-411-default-rtdb.firebaseio.com/app.json';

  constructor(private http:HttpClient) { }


  saveproduct(products:any[]){
    console.log("dffg");
    return this.http.put(this.url,products)
  }

  fetchproduct()
  {
    return this.http.get(this.url);
  }
}
