import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { signup } from '../datatype';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  issellerlogedin  = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient) { }

  signup(data:signup){
    
   let result = this.http.post('http://localhost:3000/seller',data,
   {observe:'response'}).subscribe((result)=>{
this.issellerlogedin.next(true)
   })
    console.warn(result);
  }
}
