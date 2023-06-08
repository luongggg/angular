import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productsService } from 'src/app/pages/services/products.services';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public products: any = {
    name: '',
    price: '',
    image: '',
    desc: ''
  }
  constructor(private pro: productsService,
    private route: ActivatedRoute,
    private Router: Router
  ) {

    //    gettai(){
    this.route.params.subscribe(({ id }) => {
      console.log(id);
      this.pro.detail(id).subscribe(( pro ) => {
        this.products = pro
        console.log(this.products);
      })
    })
    
  }
  update(){
    this.pro.update(this.products.id, this.products).subscribe(data => {
      this.Router.navigate(["/admin"]);
    })
  }

}


