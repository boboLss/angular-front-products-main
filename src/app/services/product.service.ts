import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getAlllProducts():Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8083/products');
  }
  deleteProduct(product: any){
    return this.http.delete('http://localhost:8083/products/' + product.id);
  }
}
