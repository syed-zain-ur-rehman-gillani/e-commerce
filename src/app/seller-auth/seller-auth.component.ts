import { Component } from '@angular/core';
import { Signup } from '../signup';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private signup:SellerService, private router:Router){}

  signupsave(data:any):void
  {
    const signupdata = new Signup(data.name,data.string,data.password)
    this.signup.signup(signupdata).subscribe((result)=>{
        console.warn(result);
        if(result){
           this.router.navigate['seller-home'];

        }
    });
  }

}
