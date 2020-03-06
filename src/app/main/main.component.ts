import { Component, OnInit } from '@angular/core';
import { BookService} from '../services/book.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  clickMessage= ''

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: any[]) => {
      console.log(data);
      
    })
  }


  onClickMe(str:string) {
    this.clickMessage = this.getBooks.get;
    alert(this.clickMessage + str);
  }

  getBooks(){
    //BookService.get

  }
}
