import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-curd-operation',
  templateUrl: './curd-operation.component.html',
  styleUrls: ['./curd-operation.component.css']
})
export class CurdOperationComponent {

  ngOnInit()
  {
    this.onFetchProduct() 
  }

  constructor(private product:ProductService) {
       
  }
  onsaveprodut(){
    this.product.saveproduct(this.products).subscribe(  (result)=> console.warn(result)) ;
  }
  tabletitle = 'UX products'
  formstitle = 'Add Products'
  products = 
  [

    {"id":"" , "name":"" , "price":""},
   
  

  ];


  onAddProduct(id:any,name:any,price:any)
  {
     this.products.push({
       id: id.value,
       name: name.value,
       price: price.value

     })
  }

  onDeleteProduct(id:number){
    if(confirm("Do you want to delete this project"))
    {
        this.products.splice(id,1)
    }
  }

  onFetchProduct(){
    this.product.fetchproduct().subscribe((response)=>{
        const data =  JSON.stringify(response)
        console.warn(data);
        this.products =  JSON.parse(data);
    },
       (err)=> console.warn(err)
    )
  }

}
