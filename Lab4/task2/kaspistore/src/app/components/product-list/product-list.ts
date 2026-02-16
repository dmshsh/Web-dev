import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductListComponent {
  products: Product[] = [
  {
    id: 1,
    name: 'iPhone 17 128GB',
    description: 'Apple iPhone 17 with great camera and performance.',
    price: 350000,
    rating: 4.8,
    image: 'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/354/5552195268d3840cd84e5_original.jpg',
    images: [
      'https://kursor-shop.kz/image/cache/catalog/apple/17/17%20blue-600x600.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb2/h8a/63904050024478.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/h12/63904050548766.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S25 128GB',
    description: 'Flagship Samsung with powerful chip and smooth display.',
    price: 420000,
    rating: 4.7,
    image: 'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/samsung/galaxy-s25/ultra/titanium-silver-blue/samsung-s25-ultra-titaniumsilverblue-5-min.png/samsung-s25-ultra-titaniumsilverblue-5-min.png/veonmarket%3Alarge',
    images: [
      'https://kursor-shop.kz/image/cache/catalog/samsung/S25%20fe/LD0006273027-600x600.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hb7/hff/683237248286,4.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/h29/683237253529,6.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-128gb-chernyi-108386211/'
  },

  {
    id: 3,
    name: 'RTX 3060',
    description: 'Powerful NVIDIA RTX 3060 graphics card for gaming and rendering.',
    price: 180000,
    rating: 4.9,
    image: 'https://images.satu.kz/156458493_w700_h500_videokarta-rtx-3060.jpg',
    images: [
      'https://www.dateks.lv/images/pic/2400/2400/930/1034.jpg',
      'https://images.satu.kz/156458493_w700_h500_videokarta-rtx-3060.jpg',
      'https://images.satu.kz/156458493_w700_h500_videokarta-rtx-3060.jpg'
    ],
    link: 'https://kaspi.kz/shop/search/?text=rtx%203060'
  },

  {
    id: 4,
    name: 'Joker Sneakers',
    description: 'Stylish Joker-themed sneakers for everyday wear.',
    price: 45000,
    rating: 4.5,
    image: 'https://361sport.com/cdn/shop/files/Joker1PeppaPig_6.jpg?v=1770279128',
    images: [
      'https://cdn.shopify.com/s/files/1/0613/7489/0037/files/Joker_1_Peppa_Pig_PC_0626c52c-86a8-46d0-ad75-d4944245d285.webp?v=1742700127',
      'https://361sport.com/cdn/shop/files/Joker1PeppaPig_6.jpg?v=1770279128',
      'https://361sport.com/cdn/shop/files/Joker1PeppaPig_6.jpg?v=1770279128'
    ],
    link: 'https://kaspi.kz/shop/search/?text=sneakers'
  },

  {
    id: 5,
    name: 'Huawei P30 Pro',
    description: 'Huawei flagship smartphone with Leica camera.',
    price: 250000,
    rating: 4.6,
    image: 'https://e-katalog.kz/jpg_zoom1/1621454.jpg',
    images: [
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30-pro/P30Pro_orange.png',
      'https://e-katalog.kz/jpg_zoom1/1621454.jpg',
      'https://e-katalog.kz/jpg_zoom1/1621454.jpg'
    ],
    link: 'https://kaspi.kz/shop/search/?text=huawei%20p30%20pro'
  },

  {
    id: 6,
    name: 'PlayStation 5 Pro',
    description: 'Next-gen gaming console with stunning graphics.',
    price: 350000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-large',
    images: [
      'https://al-fullsize.object.pscloud.io/files/alfa/node/2/1/2/5/0/21250403-yuu2mgfpe95_iu2ii5-bp2zvv5m.webp',
      'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/search/?text=ps5'
  },

  {
    id: 7,
    name: 'MacBook Pro',
    description: 'Apple MacBook Pro with powerful M-series chip.',
    price: 900000,
    rating: 4.9,
    image: 'https://www.apple.com/v/macbook-air/w/images/overview/hero/hero_static__c9sislzzicq6_large.png',
    images: [
      'https://optim.tildacdn.pro/tild3663-3261-4531-a636-346530393865/-/format/webp/image.png.webp',
      'https://www.apple.com/v/macbook-air/w/images/overview/hero/hero_static__c9sislzzicq6_large.png',
      'https://www.apple.com/v/macbook-air/w/images/overview/hero/hero_static__c9sislzzicq6_large.png'
    ],
    link: 'https://kaspi.kz/shop/search/?text=macbook%20pro'
  },

  {
    id: 8,
    name: 'Xbox Series X',
    description: 'Microsoft next-generation gaming console.',
    price: 320000,
    rating: 4.8,
    image: 'https://e-katalog.kz/posts/files/3446/6.jpg',
    images: [
      'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22012237/vpavic_201103_4275_0163.jpg?quality=90&strip=all&crop=0,0,100,100',
      'https://e-katalog.kz/posts/files/3446/6.jpg',
      'https://e-katalog.kz/posts/files/3446/6.jpg'
    ],
    link: 'https://kaspi.kz/shop/search/?text=xbox%20series%20x'
  },

  {
    id: 9,
    name: 'Nintendo Switch',
    description: 'Portable gaming console for home and travel.',
    price: 210000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/hfc/63765012545566.jpg?format=gallery-large',
    images: [
      'https://gamerz.kz/wp-content/uploads/2022/11/Nintendo-Switch-2-%D1%80%D0%B5%D0%B2%D0%B8%D0%B7%D0%B8%D1%8F-00376.jpg.webp',
      'https://resources.cdn-kaspi.kz/img/m/p/h07/hfc/63765012545566.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h07/hfc/63765012545566.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/search/?text=nintendo%20switch'
  },

  {
    id: 10,
    name: 'Xiaomi Robot Vacuum',
    description: 'Smart robot vacuum cleaner with mapping technology.',
    price: 150000,
    rating: 4.6,
    image: 'https://kz.multivarka.pro/upload/blog/RV-R640S@3.jpg',
    images: [
      'https://s1.kaercher-media.com/mam/12696200/product/205900/d0.jpg',
      'https://kz.multivarka.pro/upload/blog/RV-R640S@3.jpg',
      'https://kz.multivarka.pro/upload/blog/RV-R640S@3.jpg'
    ],
    link: 'https://kaspi.kz/shop/search/?text=robot%20vacuum'
  }
];

}
