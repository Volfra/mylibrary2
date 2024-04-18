import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {

  book = new Book();
  submitted = false;
  msgError = '';

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void { }

  saveBook(): void {
    const data = {
      isbn: this.book.isbn,
      title: this.book.title,
      author: this.book.author,
      numberpages: this.book.numberpages,
    };

    this.libraryService.create(data)
      .subscribe(
        data => {
          this.submitted=true;
        },
        err => {
          this.msgError = err.error.message;
        });
  }

  newBook() {
    this.submitted = false;
    this.book.isbn = null;
    this.book.title = null;
    this.book.author = null;
    this.book.numberpages = 0;
    this.msgError = "";
  }

}
