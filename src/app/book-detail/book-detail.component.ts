import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() title:string;
  @Input() subtitle:string;
  @Input() imageLink:string;
  @Input() author:string;
  @Input() publishedDate:string;
  @Input() description:string;


  constructor() { }

  ngOnInit(): void {
  }

}
