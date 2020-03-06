import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes'

  getBooks() {
    return this.http.get(this.booksUrl);
  }

  constructor(private http: HttpClient) { }
}
