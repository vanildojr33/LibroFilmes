import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieApi: MovieService,
    private location: Location
  ) { }

  movie: any = {};

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieApi.getDetail(id).subscribe((data)=>{
      console.log('oi', data);
      this.movie = data;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
