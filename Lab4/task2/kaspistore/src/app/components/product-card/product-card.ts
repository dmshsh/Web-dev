import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  currentImage = '';

  ngOnInit() {
    this.currentImage = this.product.image;
  }

  onEnter() {
    if (this.product.images?.length > 1) this.currentImage = this.product.images[0];
  }

  onLeave() {
    this.currentImage = this.product.image;
  }

  like() {
    this.product.likes += 1;
  }

  remove() {
    this.delete.emit(this.product.id);
  }

  whatsappLink() {
    return `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.link)}`;
  }

  telegramLink() {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }
}