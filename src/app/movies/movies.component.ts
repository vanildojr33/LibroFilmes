import { Component, OnInit } from '@angular/core';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieApi: MovieService) { }

  // Lista de filmes
  movies: any ={};

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieApi.getMovies().subscribe((data)=>{
      this.movies = data.results;
    });
  }
}
