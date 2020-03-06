import { Component, OnInit } from '@angular/core';
import { BookService} from '../services/book.service';
import {BookResponse} from '../shared/booksResponse';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clickMessage= ''

  books = [];
  bookList : BookResponse;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
      console.log(this.books);this.bookService.getBooks().subscribe((data) => {
      this.bookList = data;
      console.log(this.bookList.items);
      


    })
  }


  onClickMe(str:string) {
    this.bookService.getBooks().subscribe((data: any[]) => {
      console.log(data);
      this.books = data;

    })
  }

}
