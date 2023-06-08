import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  public products:any=''
  constructor(private http:HttpClient){
    this.http.get("http://localhost:3000/products").subscribe(products=>{
      this.products= products
    })
  }
  // products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'Honda Touring',
  //     price:'1.230 tỷ' ,
  //     description: 'Gold Wing 2021 có kích thước tổng thể 2.615 x 905 x 1.555 mm (dài x rộng x cao), chiều dài cơ sở 1.695 mm. Mẫu xe touring cỡ lớn của Honda dài và cao hơn đối thủ BMW K 1600 B lần lượt 486 mm và 90 mm. Khối lượng của Gold Wing là 390 kg, nặng hơn đời cũ 6 kg.',
  //     imgUrl:
  //       'https://cdp.azureedge.net/products/USA/HO/2021/MC/TOURING/GOLD_WING_AUTOMATIC_DCT/50/DEEP_PEARL_GRAY/2000000001.jpg',
  //     isDescriptionVisible: false,
  //   },
  //   {
  //     id: '2',
  //     name: 'Honda Street',
  //     price: "",
  //     description: 'lorem ipsum',
  //     imgUrl:"https://xemaynamtien.com/uploads/source/san-pham/beat-street/z3861427874665-b48df19303e080a7f400f102105aaa5a.png",
  //           isDescriptionVisible: false,
  //   },
  //   {
  //     id: '3',
  //     name: 'Honda ST125 Dax',
  //     price: "125 triệu",
  //     description:
  //       'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
  //     imgUrl:
  //       'https://images2.thanhnien.vn/Uploaded/bahung/2022_10_13/honda-dax-st1254-1490.jpg',
  //     isDescriptionVisible: false,
  //   },
  //   {
  //     id: '3',
  //     name: 'Honda ST125 Dax',
  //     price: "125 triệu",
  //     description:
  //       'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
  //     imgUrl:
  //       'https://images2.thanhnien.vn/Uploaded/bahung/2022_10_13/honda-dax-st1254-1490.jpg',
  //     isDescriptionVisible: false,
  //   },
  //   {
  //     id: '3',
  //     name: 'Honda ST125 Dax',
  //     price: "125 triệu",
  //     description:
  //       'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
  //     imgUrl:
  //       'https://images2.thanhnien.vn/Uploaded/bahung/2022_10_13/honda-dax-st1254-1490.jpg',
  //     isDescriptionVisible: false,
  //   },
    
  //   {
  //     id: '3',
  //     name: 'Honda ST125 Dax',
  //     price: "125 triệu",
  //     description:
  //       'Product 1 description Product 1 descriptionProduct 1 descriptionProduct 1 description',
  //     imgUrl:
  //       'https://images2.thanhnien.vn/Uploaded/bahung/2022_10_13/honda-dax-st1254-1490.jpg',
  //     isDescriptionVisible: false,
  //   },
   
     
    
    
  // ];

}
