import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { Observable } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {

 
  return false;
};

