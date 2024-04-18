import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

const baseUrl = 'http://localhost:8080/api/v1/book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  get(id: String): Observable<Book> {
    return this.http.get<Book>(`${baseUrl}/${id}`);
  }
 
  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(baseUrl);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
