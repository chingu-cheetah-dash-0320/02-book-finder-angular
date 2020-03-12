import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() title:string = "Title Missing";
  @Input() subtitle:string ="";
  @Input() imageLink:string = 'https://via.placeholder.com/128x193.jpg?text=No Img'
  @Input() author:string = " No Author details";
  @Input() publishedDate:string = "";
  @Input() description:string = "Description not available";
  @Input() infoLink:string = "";
  @Input() publisher:string = "";
  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
    if(this.book.volumeInfo.title) this.title = this.book.volumeInfo.title;
    if(this.book.volumeInfo.subtitle)this.subtitle = this.book.volumeInfo.subtitle;
    if(this.book.volumeInfo.publishedDate)this.publishedDate=this.book.volumeInfo.publishedDate;
    if(this.book.volumeInfo.authors)this.author = this.book.volumeInfo.authors[0];
    if(this.book.volumeInfo.description)this.description = this.book.volumeInfo.description;
    if(this.book.volumeInfo.imageLinks && this.book.volumeInfo.imageLinks.smallThumbnail)this.imageLink = this.book.volumeInfo.imageLinks.smallThumbnail;

    //    [author]=  "book.volumeInfo.authors[0]" 
        
  }

  ngOnChanges(): void {
    
  }

}
