import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  @Input({ required: true }) products: Product[] = [];

  view: Product[] = [];

  ngOnChanges() {
    this.view = [...(this.products ?? [])];
  }

  onDelete(id: number) {
    this.view = this.view.filter(p => p.id !== id);
  }
}