import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() title:string;
  @Input() subtitle:string;
  @Input() imageLink:string = 'http://books.google.com/books/content?id=OP8C9mKQxAMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api';
  @Input() author:string;
  @Input() publishedDate:string;
  @Input() description:string;


  constructor() { }

  ngOnInit(): void {
  }

}
