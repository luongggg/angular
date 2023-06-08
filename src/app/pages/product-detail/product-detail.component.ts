import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { productsService } from '../services/products.services';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { commentsService } from '../services/comments.services';
import { Comment } from 'src/app/common/comment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  
  comment: Comment = {
    name: '',
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
   
   
     
    
    
  // ];
products:any=''

  constructor(private http:HttpClient,private commentsService: commentsService,private pro:productsService,private Router:Router,private router:ActivatedRoute,private cart:CartService){
  this.router.params.subscribe(({id})=>{
    this.pro.detail(id).subscribe(product=>{
      this.products= product
      console.log(this.products); console.log(product);
      
    })
   
    console.log(this.products);
    this.http.get("http://localhost:3000/products").subscribe(
      products => { this.products= products; console.log(products); }
    )
    
    
  })
  this.router.params.subscribe((params) => {
    this.productId = params['id'];
  })

}
addtoCart(data:any) {
  this.cart.addToCart(data)
    .subscribe(() => {
      console.log('Thêm vào giỏ hàng thành công');
    });
}
//    gettai(){
 


data: object = {};
productId: string = '';
userId: string = '';
createAt: string = '';
comments: Comment[] = [];
nameProduct:string = ''
ngOnInit(): void { // khi component được render thì sẽ chạy tất cả các hàm trong onInit()
  this.getLocalstorage() !== null ? this.userId = this.getLocalstorage().user.email : this.userId = ''
  this.getComment()
  this.getNameProduct(this.productId)
}

getLocalstorage() { 
  if (!localStorage.getItem('auth')) return null; // kiểm tra nếu localStorage rỗng thì sẽ trả về giá trị null
  else return JSON.parse(localStorage.getItem('auth') as string) //kiểm tra nếu localStorage có dữ liệu thì sẽ trả về dữ liệu
}
onComment() {
  this.data = { // gán các trường cần lưu vào database vào biến data
    content: this.comment.name,
    idProduct: this.productId,
    userComment: this.userId,
    createAt: new Date(),
    nameProduct:this.nameProduct
  }
  this.commentsService.create(this.data).subscribe(data => { // call api tạo comment
    this.getComment()
  })
}
getComment() { // lấy tất cả comment theo sản phẩm
  this.commentsService.getCommentForProduct(this.productId).subscribe(data => {
    this.comments = data.sort((a: any, b: any) => b.id - a.id) // dùng hàm sort() sắp xếp data theo thứ tự comment mới nhất rồi gán vào biến comments

  })
}
 
async getNameProduct(id:any){ // lấy ra tên của 1 sản phẩm đang render
  this.pro.detail(id).subscribe(data=>{ // call api
    this.nameProduct = data.name // thành công thì gán vào biến nameProduct
  })
}
}
