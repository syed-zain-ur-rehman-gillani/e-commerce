import { Component } from '@angular/core';
import { Signup } from '../signup';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {



  signupsave(data:any):void
  {
    const signupdata = new Signup(data.name,data.string,data.password)
    console.log(signupdata);
  }

}
