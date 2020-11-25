import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  // Link e Key para acesso da API
  private apikey: string = "9d28391aea94c96d26db8ef59d179f25";
  private url: string = `https://api.themoviedb.org/3/movie/`;

  constructor(private http: HttpClient) { }

  // Buscar lista de filmes
  getMovies(): Observable<any> {
    let dat = this.http.get<any>(`${this.url}popular?api_key=${this.apikey}&language=pt-BR`).pipe(
      map((data: any) => data)
    )
    return dat;
  }

  // Buscar detalhes de um filme
  getDetail(id: Number): Observable<any> {
    let dat = this.http.get<any>(`${this.url}${id}?api_key=${this.apikey}&language=pt-BR`).pipe(
      map((data: any) => data)
    )
    return dat;
  }

}
