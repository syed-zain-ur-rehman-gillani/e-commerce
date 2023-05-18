import { Component } from '@angular/core';
import { Signup } from '../signup';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signup } from '../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private signup:SellerService, private router:Router){}

  signupsave(data:signup):void
  {
    const signupdata = new Signup(data.name ,data.email,data.password)
    this.signup.signup(signupdata).subscribe((result)=>{
        if(result){
           this.router.navigate(['seller-home']);

        }
    });
  }

}
