import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { signup } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  signup(data:signup){
    
   return this.http.post('http://localhost:3000/seller',data)
  }
}
