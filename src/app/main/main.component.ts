import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookResponse } from '../shared/booksResponse';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  startPos: number = 1;
  endPos: number = 20;
  totalBooks: number = 20;
  query: string;

  waitingForResponse: boolean = false;
  bookList: BookResponse;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

  }

  nextPage(){
    if(this.totalBooks-this.endPos -20>0){
      this.startPos+=20;
      this.endPos+=20;
      this.onClickMe(this.query);

    }
  }

  prevPage(){
    if(this.startPos -20>0){
      this.startPos-=20;
      this.endPos-=20;
      this.onClickMe(this.query);
    }
  }


  onClickMe(str: string) {
    this.query=str;
    this.waitingForResponse = true;
    this.bookService.getBooks(str, this.startPos, this.endPos).subscribe((data) => {
      console.log(data);
      this.bookList = data;
      this.waitingForResponse = false;
      this.totalBooks = this.bookList.totalItems
    })
  }

}
