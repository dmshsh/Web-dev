import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Gaming' },
    { id: 2, name: 'Smartphones' },
    { id: 3, name: 'Laptops' },
    { id: 4, name: 'Home Tech' },
  ];

  products: Product[] = [
    {
      id: 1,
      categoryId: 2,
      name: 'iPhone 17 128GB',
      description: 'Apple iPhone with great camera and performance.',
      price: 350000,
      rating: 4.8,
      likes: 0,
      image: 'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/354/5552195268d3840cd84e5_original.jpg',
      images: [
        'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/354/5552195268d3840cd84e5_original.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/h8a/63904050024478.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h12/63904050548766.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 2,
      categoryId: 2,
      name: 'Samsung Galaxy S25 128GB',
      description: 'Flagship Samsung with powerful chip and smooth display.',
      price: 420000,
      rating: 4.7,
      likes: 0,
      image: 'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/samsung/galaxy-s25/ultra/titanium-silver-blue/samsung-s25-ultra-titaniumsilverblue-5-min.png/samsung-s25-ultra-titaniumsilverblue-5-min.png/veonmarket%3Alarge',
      images: [
        'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/samsung/galaxy-s25/ultra/titanium-silver-blue/samsung-s25-ultra-titaniumsilverblue-5-min.png/samsung-s25-ultra-titaniumsilverblue-5-min.png/veonmarket%3Alarge',
        'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/samsung/galaxy-s25/ultra/titanium-silver-blue/samsung-s25-ultra-titaniumsilverblue-5-min.png/samsung-s25-ultra-titaniumsilverblue-5-min.png/veonmarket%3Alarge',
        'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/samsung/galaxy-s25/ultra/titanium-silver-blue/samsung-s25-ultra-titaniumsilverblue-5-min.png/samsung-s25-ultra-titaniumsilverblue-5-min.png/veonmarket%3Alarge'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-128gb-chernyi-108386211/'
    },
    {
      id: 3,
      categoryId: 2,
      name: 'Huawei P30 Pro',
      description: 'Huawei flagship smartphone with strong camera.',
      price: 250000,
      rating: 4.6,
      likes: 0,
      image: 'https://e-katalog.kz/jpg_zoom1/1621454.jpg',
      images: [
        'https://e-katalog.kz/jpg_zoom1/1621454.jpg',
        'https://e-katalog.kz/jpg_zoom1/1621454.jpg',
        'https://e-katalog.kz/jpg_zoom1/1621454.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=huawei%20p30%20pro'
    },
   {
      id: 4,
      categoryId: 2,
      name: 'Xiaomi Mi MIX 2',
      description: 'MI MIX 2 flagship smartphone with strong camera.',
      price: 250000,
      rating: 4.6,
      likes: 0,
      image: 'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/xiaomi/mi-mix-2-black/mimix2b.jpg/mimix2b.jpg/veonmarket%3Alarge',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfd/hc7/63757153763358.jpg?format=gallery-large',
        'https://e-katalog.kz/jpg_zoom1/1621454.jpg',
        'https://e-katalog.kz/jpg_zoom1/1621454.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=huawei%20p30%20pro'
    },
       {
      id: 5,
      categoryId: 2,
      name: 'Motorola Edge 50 ',
      description: 'I liked it!',
      price: 250000,
      rating: 4.6,
      likes: 0,
      image: 'https://m.media-amazon.com/images/I/510jP6IUOrL._AC_UF1000,1000_QL80_.jpg',
      images: [
        'https://static.shop.kz/upload/resize_cache/iblock/f1a/w2x5odwkjpmq3va9uw1v1qh89ftqopth/450_450_1/166275s1.jpg',
        'https://e-katalog.kz/jpg_zoom1/1621454.jpg',
        'https://e-katalog.kz/jpg_zoom1/1621454.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=huawei%20p30%20pro'
    },

    {
      id: 6,
      categoryId: 1,
      name: 'RTX 3060',
      description: 'NVIDIA RTX 3060 graphics card for gaming and work.',
      price: 180000,
      rating: 4.9,
      likes: 0,
      image: 'https://images.satu.kz/156458493_w700_h500_videokarta-rtx-3060.jpg',
      images: [
        'https://images.satu.kz/156458493_w700_h500_videokarta-rtx-3060.jpg',
        'https://images.satu.kz/156458493_w700_h500_videokarta-rtx-3060.jpg',
        'https://images.satu.kz/156458493_w700_h500_videokarta-rtx-3060.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=rtx%203060'
    },
    {
      id: 7,
      categoryId: 1,
      name: 'PlayStation 5 Pro',
      description: 'Next-gen console with stunning graphics.',
      price: 350000,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/search/?text=ps5'
    },
    {
      id: 8,
      categoryId: 1,
      name: 'Xbox Series X',
      description: 'Microsoft next-generation console.',
      price: 320000,
      rating: 4.8,
      likes: 0,
      image: 'https://e-katalog.kz/posts/files/3446/6.jpg',
      images: [
        'https://e-katalog.kz/posts/files/3446/6.jpg',
        'https://e-katalog.kz/posts/files/3446/6.jpg',
        'https://e-katalog.kz/posts/files/3446/6.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=xbox%20series%20x'
    },
    {
      id: 9,
      categoryId: 1,
      name: 'Nintendo Switch',
      description: 'Portable gaming console.',
      price: 210000,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/hfc/63765012545566.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h07/hfc/63765012545566.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h07/hfc/63765012545566.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h07/hfc/63765012545566.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/search/?text=nintendo%20switch'
    },


    {
      id: 10,
      categoryId: 3,
      name: 'MacBook Pro',
      description: 'Powerful laptop with M-series chip.',
      price: 900000,
      rating: 4.9,
      likes: 0,
      image: 'https://www.apple.com/v/macbook-air/w/images/overview/hero/hero_static__c9sislzzicq6_large.png',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwY58M-dvmyhpLVfYDjnpwlrX8rhZymjaGhA&s',
        'https://www.apple.com/v/macbook-air/w/images/overview/hero/hero_static__c9sislzzicq6_large.png',
        'https://www.apple.com/v/macbook-air/w/images/overview/hero/hero_static__c9sislzzicq6_large.png'
      ],
      link: 'https://kaspi.kz/shop/search/?text=macbook%20pro'
    },
   {
  id: 11,
  categoryId: 3,
  name: 'ASUS VivoBook 15',
  description: 'Lightweight laptop for study and office work.',
  price: 280000,
  rating: 4.4,
  likes: 0,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm-_-_CMr--GQeIAnGp7c_emO_WeAUj_BFA&s',
  images: [
    'https://pi.mdev.kz/67187851-701d-4545-84a4-cc0816028693?type=webp&w=700&h=700',
    'https://dlcdnwebimgs.asus.com/gain/7C5D5A7E-4A8E-4A6E-9B8F-DAA2E0F6C2C1',
    'https://dlcdnwebimgs.asus.com/gain/7C5D5A7E-4A8E-4A6E-9B8F-DAA2E0F6C2C1'
  ],
  link: 'https://kaspi.kz/shop/search/?text=asus%20vivobook%2015'
},

{
  id: 12,
  categoryId: 3,
  name: 'HP Pavilion 14',
  description: 'Compact laptop with modern design and good performance.',
  price: 310000,
  rating: 4.5,
  likes: 0,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0hiN1c8MkMMKs-2EfBHwi2Oy9JvI-6zQrA&s',
  images: [
    'https://static.shop.kz/upload/resize_cache/iblock/a83/xao7a8tllpx5k2no9v4z06u1gek01thy/450_450_1/169887x1.jpg',
    'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06523363.png',
    'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06523363.png'
  ],
  link: 'https://kaspi.kz/shop/search/?text=hp%20pavilion%2014'
},

{
  id: 13,
  categoryId: 3,
  name: 'Lenovo IdeaPad 3',
  description: 'Affordable laptop for everyday tasks and browsing.',
  price: 260000,
  rating: 4.3,
  likes: 0,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuD-CAWOsLx8xukDYzSmd-1MV8fcNKM80Gg&s',
  images: [
    'https://notik.kz/wp-content/uploads/2021/08/3-16.png',
    'https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-hero.png',
    'https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-hero.png'
  ],
  link: 'https://kaspi.kz/shop/search/?text=lenovo%20ideapad%203'
},

{
  id: 14,
  categoryId: 3,
  name: 'Acer Aspire 5',
  description: 'Reliable laptop with good battery life and performance.',
  price: 290000,
  rating: 4.4,
  likes: 0,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/hdb/84436789002270.jpg?format=gallery-large',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUpgN4byFtR0tGQm1QVeLjYLsQyonN7l-Ow&s',
    'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/Images/20220315/Aspire-5-A515-57.png',
    'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/Images/20220315/Aspire-5-A515-57.png'
  ],
  link: 'https://kaspi.kz/shop/search/?text=acer%20aspire%205'
},
{
  id: 15,
  categoryId: 1,
  name: 'AMD Radeon RX 580',
  description: 'Popular gaming graphics card for Full HD gaming.',
  price: 95000,
  rating: 4.5,
  likes: 0,
  image: 'https://www.hardwareluxx.ru/images/cdn01/2219B27A17C8448C8EDA36B2EF96091B/img/6460531B848E45BCA2F0D23BD59A324E/retail-Gigabyte-RX550-1_6460531B848E45BCA2F0D23BD59A324E.jpg',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDJukOcpTmfOtnbHAo8XbGmLl0hgHLCoAnA&s',
    'PASTE_IMAGE_URL_2',
    'PASTE_IMAGE_URL_3'
  ],
  link: 'https://kaspi.kz/shop/search/?text=rx%20580'
},

    {
      id: 16,
      categoryId: 4,
      name: 'Xiaomi Robot Vacuum',
      description: 'Smart robot vacuum cleaner.',
      price: 150000,
      rating: 4.6,
      likes: 0,
      image: 'https://kz.multivarka.pro/upload/blog/RV-R640S@3.jpg',
      images: [
        'https://tgrad.kz/upload/iblock/bba/bba0cc56648e5dab71cf7ba5ad43cbc4.jpg',
        'https://kz.multivarka.pro/upload/blog/RV-R640S@3.jpg',
        'https://kz.multivarka.pro/upload/blog/RV-R640S@3.jpg'
      ],
      link: 'https://kaspi.kz/shop/search/?text=robot%20vacuum'
    },
    {
  id: 17,
  categoryId: 4,
  name: 'Samsung Smart TV 55"',
  description: '55-inch 4K Smart TV with HDR support and Wi-Fi.',
  price: 420000,
  rating: 4.8,
  likes: 0,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa8e5kvLadmx7WCOkKW3wFfH_C2qVJQkIkA&s',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLLcE4BPrFlzcPL0T9LtLLuxSFy7hNW3p5A&s',
    'https://images.samsung.com/is/image/samsung/p6pim/kz_ru/ue55cu7100uxce/gallery/kz-ru-uhd-cu7100-ue55cu7100uxce-536720015',
    'https://images.samsung.com/is/image/samsung/p6pim/kz_ru/ue55cu7100uxce/gallery/kz-ru-uhd-cu7100-ue55cu7100uxce-536720015'
  ],
  link: 'https://kaspi.kz/shop/search/?text=samsung%2055%204k%20tv'
},

{
  id: 18,
  categoryId: 4,
  name: 'LG Washing Machine',
  description: 'Front-load washing machine with inverter motor.',
  price: 380000,
  rating: 4.7,
  likes: 0,
  image: 'https://mobileimages.lowes.com/productimages/f41d51c3-5efc-4056-9c2f-77335d786b7e/16648175.jpg',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiLYJJiPKu1K7IXNk4bQoUkDlF1FXCBWbjQ&s',
    'https://www.lg.com/kz/images/washing-machines/md07552561/gallery/medium01.jpg',
    'https://www.lg.com/kz/images/washing-machines/md07552561/gallery/medium01.jpg'
  ],
  link: 'https://kaspi.kz/shop/search/?text=lg%20washing%20machine'
},

{
  id: 19,
  categoryId: 4,
  name: 'Dyson V11 Vacuum Cleaner',
  description: 'Powerful cordless vacuum cleaner with long battery life.',
  price: 450000,
  rating: 4.9,
  likes: 0,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1eV3CLZGGMTl9MF0OOzRb-gMaB1yKhC_xfQ&s',
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4TM_NcaSzQG9ZsEWlYsDuGFULqiyD2aFcA&s',
    'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/447028-01.png',
    'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/447028-01.png'
  ],
  link: 'https://kaspi.kz/shop/search/?text=dyson%20v11'
},

{
  id: 20,
  categoryId: 4,
  name: 'Philips Air Fryer',
  description: 'Healthy air fryer for cooking with little oil.',
  price: 160000,
  rating: 4.6,
  likes: 0,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNs0F5FMCGjmc8LINQ0hd2m9sZcIHrU7GxOQ&s',
  images: [
    'https://images.philips.com/is/image/philipsconsumer/677b397bbb0d4abfac4fb0ee011a7be3?extend=0,-252,0,-906&wid=720&hei=405&fit=stretch,1&$jpglarge$',
    'https://www.philips.kz/c-dam/b2c/master/product-catalog/household-products/airfryer/hd9650-90/hd9650_90-ims-kz_KZ.jpg',
    'https://www.philips.kz/c-dam/b2c/master/product-catalog/household-products/airfryer/hd9650-90/hd9650_90-ims-kz_KZ.jpg'
  ],
  link: 'https://kaspi.kz/shop/search/?text=philips%20airfryer'
},
  ];

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}