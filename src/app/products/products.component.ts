import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true,
})
export class ProductsComponent {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAlllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  handleDelete(p: any): void {
    this.productService.deleteProduct(p).subscribe({
      next: () => {
        console.log('Product deleted successfully');
        this.getAllProducts();
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      }
    });
    this.getAllProducts();
  }
}
