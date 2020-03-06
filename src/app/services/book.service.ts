import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q='//angular+inauthor:""'
  //  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes'

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  public getBooks(query:string, start:number, end:number) {
    let queryString = `${this.booksUrl}${query}&startIndex=${start}&maxResults=20`
    return this.http.get(queryString).pipe(catchError(this.handleError));
    
  }


}
