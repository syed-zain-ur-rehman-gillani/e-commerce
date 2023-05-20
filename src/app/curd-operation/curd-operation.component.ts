import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-curd-operation',
  templateUrl: './curd-operation.component.html',
  styleUrls: ['./curd-operation.component.css']
})
export class CurdOperationComponent {

fetching =false;


  ngOnInit()
  {
    this.onFetchProduct() ;
    
  }

  constructor(private product:ProductService) {
       
  }
  onsaveprodut(){
    this.product.saveproduct(this.products).subscribe((result)=>console.log(result));
    this.onFetchProduct() ;
  }


  
  tabletitle = 'UX products'
  formstitle = 'Add Products'
  products = 
  [

    {id:"a" , name:"a" , price:"a"},
    
   
  

  ];


  onAddProduct(id1:any,name1:any,price1:any)
  {
     this.products.push({
       id: id1,
       name: name1,
       price: price1
     }),
     this.onsaveprodut();
     this.onFetchProduct() ;
     console.log("Data in array" + id1,name1,price1);
  }

  onDeleteProduct(id:number){
    if(confirm("Do you want to delete this project"))
    {
        this.products.splice(id,1)
    }
  }

  onFetchProduct(){
    this.fetching =true
    this.product.fetchproduct().subscribe((response)=>{
        const data =  JSON.stringify(response)
       this.products =  JSON.parse(data);
        this.fetching =false
    },
       (err)=> console.log(err)
    )
  }

}
