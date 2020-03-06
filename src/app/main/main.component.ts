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

  waitingForResponse: boolean = false;
  bookList: BookResponse;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

  }


  onClickMe(str: string) {
    this.waitingForResponse = true;
    this.bookService.getBooks(str, this.startPos, this.endPos).subscribe((data) => {
      console.log(data);
      this.bookList = data;
      this.waitingForResponse = false;
      this.totalBooks = this.bookList.totalItems
    })
  }

}
