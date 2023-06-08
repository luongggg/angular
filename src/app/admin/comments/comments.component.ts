import { Component } from '@angular/core';
import { commentsService } from 'src/app/pages/services/comments.services';
import { productsService } from 'src/app/pages/services/products.services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentComponent {
  comments:any[] = []
  constructor(
    private productService : productsService,
    private commentsService : commentsService
  ){
    
  }
  ngOnInit(): void {
    this.getComment()
   }
  getComment(){ // lấy ra tất cả comments
    this.commentsService.getComments().subscribe(data=>{
      console.log(data);
      
      this.comments= data //khi call thành công dữ liệu sẽ gán lại biến comments
    })
  }
  removeComment(id:any){ // xóa comment
    const confirm = window.confirm('Bạn có muốn xóa bình luận này không?') // tạo biến confirm
    if (confirm) {// nếu biến confirm tồn tại thì thực hiện call api xóa dữ liệu ở bên dưới
      this.commentsService.delete(id).subscribe(data=>{
        this.getComment() // khi xóa thành công sẽ call lại hàm để render ra dữ liệu mới nhất
      })
    }
  }
}