import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  @Input() movies?:Movie[];
 
  constructor(config: NgbRatingConfig, private router: Router) {
    // customize default values of ratings used by this component tree
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    console.log(this.movies)
  }

  onMovieClick(movie:Movie){


    this.router.navigate(['/pelicula', movie.id])
    

  }

}
