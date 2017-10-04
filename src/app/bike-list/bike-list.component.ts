import { Component, OnInit } from '@angular/core';
import { IBike } from './bike';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent {
  pageTitle: string = "Joe's bike shop";
  imageWidth: number = 70;
  imageMargin: number = 2;
  showImage: boolean = true;

  _ckMen: string;
  _ckWomen: string;
  _ckKids: string;



  ckBoxClick(gender: string): void {
    this.filteredBikes = this.ckMen ? this.performFilter(gender) : this.bikes;
  }

  get ckMen() {
    return this._ckMen;
  }
  set ckMen(value: string) {
    this._ckMen = value;
    this.filteredBikes = this.ckMen ? this.performFilter(this.ckMen) : this.bikes; // JS Conditional Operator
  }

  get ckWomen() {
    return this._ckMen;
  }
  set ckWomen(value: string) {
    this._ckMen = value;
    this.filteredBikes = this.ckMen ? this.performFilter(this.ckMen) : this.bikes; // JS Conditional Operator
  }

  get ckKids() {
    return this._ckMen;
  }
  set ckKids(value: string) {
    this._ckMen = value;
    this.filteredBikes = this.ckMen ? this.performFilter(this.ckMen) : this.bikes; // JS Conditional Operator
  }


  performFilter(filterBy: string): IBike[] {
    return this.bikes.filter((bike: IBike) => bike.category.toLocaleLowerCase().indexOf(filterBy) != -1);
  }

  constructor() {
    this.filteredBikes = this.bikes;
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  filteredBikes: IBike[];

  bikes: IBike[] = [
    {
      'bikeId': 1,
      'bikeName': 'MTB bike',
      'bikeCode': 'MTB-0020',
      'releaseDate': 'March 18, 2016',
      'description': 'Mens 29 inch mountain bike',
      'category': 'mens',
      'price': 532.99,
      'starRating': 4.2,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177215/bike-mountain.png'
    },
    {
      'bikeId': 2,
      'bikeName': 'MTB bike',
      'bikeCode': 'MTB-0030',
      'releaseDate': 'June 15, 2017',
      'description': 'Womans 27 inch mountain bike',
      'category': 'womens',
      'price': 515.99,
      'starRating': 4.5,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177215/bike-mountain.png'
    },
    {
      'bikeId': 3,
      'bikeName': 'Sports bike',
      'bikeCode': 'SB-1020',
      'releaseDate': 'May 9, 2016',
      'description': 'Mens Sports Bike',
      'category': 'mens',
      'price': 1099.99,
      'starRating': 4.8,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177216/bike-sport.png'
    },
    {
      'bikeId': 4,
      'bikeName': 'Kids bike',
      'bikeCode': 'KB-3045',
      'releaseDate': 'October 28, 2016',
      'description': 'Kids bike with stabalizers',
      'category': 'kids',
      'price': 250.00,
      'starRating': 4.4,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177214/bike-kid.png'
    },
    {
      'bikeId': 5,
      'bikeName': 'Ladies bike',
      'bikeCode': 'LB-4060',
      'releaseDate': 'March 10, 2016',
      'description': 'Ladies touring bike',
      'category': 'womens',
      'price': 450.00,
      'starRating': 4.9,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177213/bike-female.png'
    },
    {
      'bikeId': 6,
      'bikeName': 'Kids blue bike',
      'bikeCode': 'KB-3075',
      'releaseDate': 'June 28, 2016',
      'description': 'Kids blue bike with stabalizers',
      'category': 'kids',
      'price': 290.00,
      'starRating': 4.8,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/177214/bike-kid.png'
    }
  ];
}
